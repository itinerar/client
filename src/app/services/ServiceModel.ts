export const ModelServiceKey = 'design.serviceModel';

export function ServiceModel(model: Object) {
    return (target: Function) => {
        Reflect.defineMetadata(ModelServiceKey, model, target.prototype);
    };
}
