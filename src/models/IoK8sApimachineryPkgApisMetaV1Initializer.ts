// tslint:disable
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.16.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime.ts';
/**
 * Initializer is information about an initializer that has not yet completed.
 * @export
 * @interface IoK8sApimachineryPkgApisMetaV1Initializer
 */
export interface IoK8sApimachineryPkgApisMetaV1Initializer {
    /**
     * name of the process that is responsible for initializing this object.
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1Initializer
     */
    name: string;
}

export function IoK8sApimachineryPkgApisMetaV1InitializerFromJSON(json: any): IoK8sApimachineryPkgApisMetaV1Initializer {
    return {
        'name': json['name'],
    };
}

export function IoK8sApimachineryPkgApisMetaV1InitializerToJSON(value?: IoK8sApimachineryPkgApisMetaV1Initializer): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'name': value.name,
    };
}


