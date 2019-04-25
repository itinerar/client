const ModelMetadata = 'modelmetadata';

export function Model() {
    return (target: Function) => {
        // Reflect.defineMetadata(ModelServiceKey, model, target.prototype);
    };
}

export function Field(type?: Object) {
    return function(target: Object, key: string) {
        const modelMetadata = Reflect.getMetadata(ModelMetadata, target.constructor) || {};
        modelMetadata[key] = type || Reflect.getMetadata('design:type', target, key);
        Reflect.defineMetadata(ModelMetadata, modelMetadata, target.constructor);
        // console.log('field ->', target, key,
        //     Reflect.getMetadata('design:type', target, key).name,
        // Reflect.getMetadata('design:paramtypes', target, key),
        // Reflect.getMetadata('design:returntype', target, key),
        // );
    };
}
