import { FieldPresence, FieldProcessorAdt, FieldSchema, Processor, ValueSchema } from '@ephox/boulder';
import { Adt, Fun, Id, Option } from '@ephox/katamari';

import { AdtInterface } from '../alien/TypeDefinitions';
import { CompositeSketchDetail } from '../api/ui/Sketcher';

export type PartType = (PartialSpec) => PartTypeAdt;
export interface PartialSpec { }

export interface PartSpec<D extends CompositeSketchDetail> {
  defaults: () => () => {};
  factory: () => any;
  name: () => string;
  overrides: () => OverrideHandler<D>;
  pname: () => string;
  schema: () => FieldProcessorAdt[];
}

export type OverrideHandler<D extends CompositeSketchDetail> = (detail: D, spec?: PartialSpec, partValidated?: any) => OverrideSpec;

export interface OverrideSpec {
  [key: string]: any;
}

export type required<T> = Option<T>;
export type external<T> = Option<T>;
export type optional<T> = Option<T>;
export type group<T> = Option<T>;
export interface PartTypeAdt extends AdtInterface {
  fold<T>(required, external, optional, group);
}

const adt = Adt.generate([
  { required: [ 'data' ] },
  { external: [ 'data' ] },
  { optional: [ 'data' ] },
  { group: [ 'data' ] }
]);

const fFactory = FieldSchema.defaulted('factory', { sketch: Fun.identity });
const fSchema = FieldSchema.defaulted('schema', [ ]);
const fName = FieldSchema.strict('name');
const fPname = FieldSchema.field(
  'pname',
  'pname',
  FieldPresence.defaultedThunk((typeSpec) => {
    return '<alloy.' + Id.generate(typeSpec.name) + '>';
  }),
  ValueSchema.anyValue()
);

const fDefaults = FieldSchema.defaulted('defaults', Fun.constant({ }));
const fOverrides = FieldSchema.defaulted('overrides', Fun.constant({ }));

const requiredSpec = ValueSchema.objOf([
  fFactory, fSchema, fName, fPname, fDefaults, fOverrides
]);

const externalSpec = ValueSchema.objOf([
  fFactory, fSchema, fName, fDefaults, fOverrides
]);

const optionalSpec = ValueSchema.objOf([
  fFactory, fSchema, fName, fPname, fDefaults, fOverrides
]);

const groupSpec = ValueSchema.objOf([
  fFactory, fSchema, fName,
  FieldSchema.strict('unit'),
  fPname, fDefaults, fOverrides
]);

const asNamedPart = function <D extends CompositeSketchDetail>(part: PartTypeAdt): Option<PartSpec<D>> {
  return part.fold(Option.some, Option.none, Option.some, Option.some);
};

const name = (part: PartTypeAdt): string => {
  const get = (data) => {
    return data.name();
  };
  return part.fold(get, get, get, get);
};

const asCommon = function <D extends CompositeSketchDetail>(part: PartTypeAdt): PartSpec<D> {
  return part.fold(Fun.identity, Fun.identity, Fun.identity, Fun.identity);
};

const convert = (adtConstructor, partSchema: Processor):
                  (PartialSpec) => PartTypeAdt => {
  return (spec) => {
    const data = ValueSchema.asStructOrDie('Converting part type', partSchema, spec);
    return adtConstructor(data);
  };
};

const required = convert(adt.required, requiredSpec) as PartType;
const external = convert(adt.external, externalSpec) as PartType;
const optional = convert(adt.optional, optionalSpec) as PartType;
const group = convert(adt.group, groupSpec) as PartType;
const original = Fun.constant('entirety');

export {
  required,
  external,
  optional,
  group,
  asNamedPart,
  name,
  asCommon,

  original
};