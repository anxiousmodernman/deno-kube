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

import { exists, mapValues } from '../runtime';
/**
 * AllowedFlexVolume represents a single Flexvolume that is allowed to be used.
 * @export
 * @interface IoK8sApiPolicyV1beta1AllowedFlexVolume
 */
export interface IoK8sApiPolicyV1beta1AllowedFlexVolume {
    /**
     * driver is the name of the Flexvolume driver.
     * @type {string}
     * @memberof IoK8sApiPolicyV1beta1AllowedFlexVolume
     */
    driver: string;
}

export function IoK8sApiPolicyV1beta1AllowedFlexVolumeFromJSON(json: any): IoK8sApiPolicyV1beta1AllowedFlexVolume {
    return {
        'driver': json['driver'],
    };
}

export function IoK8sApiPolicyV1beta1AllowedFlexVolumeToJSON(value?: IoK8sApiPolicyV1beta1AllowedFlexVolume): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'driver': value.driver,
    };
}

