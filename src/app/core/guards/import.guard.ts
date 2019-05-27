export function throwIfAlreadLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import ${moduleName} once time only!`);
    }
}
