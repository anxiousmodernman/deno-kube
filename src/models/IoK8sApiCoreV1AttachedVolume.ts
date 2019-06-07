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
 * AttachedVolume describes a volume attached to a node
 * @export
 * @interface IoK8sApiCoreV1AttachedVolume
 */
export interface IoK8sApiCoreV1AttachedVolume {
    /**
     * DevicePath represents the device path where the volume should be available
     * @type {string}
     * @memberof IoK8sApiCoreV1AttachedVolume
     */
    devicePath: string;
    /**
     * Name of the attached volume
     * @type {string}
     * @memberof IoK8sApiCoreV1AttachedVolume
     */
    name: string;
}

export function IoK8sApiCoreV1AttachedVolumeFromJSON(json: any): IoK8sApiCoreV1AttachedVolume {
    return {
        'devicePath': json['devicePath'],
        'name': json['name'],
    };
}

export function IoK8sApiCoreV1AttachedVolumeToJSON(value?: IoK8sApiCoreV1AttachedVolume): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'devicePath': value.devicePath,
        'name': value.name,
    };
}

