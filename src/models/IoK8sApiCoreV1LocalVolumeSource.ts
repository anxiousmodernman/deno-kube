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
 * Local represents directly-attached storage with node affinity (Beta feature)
 * @export
 * @interface IoK8sApiCoreV1LocalVolumeSource
 */
export interface IoK8sApiCoreV1LocalVolumeSource {
    /**
     * Filesystem type to mount. It applies only when the Path is a block device. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". The default value is to auto-select a fileystem if unspecified.
     * @type {string}
     * @memberof IoK8sApiCoreV1LocalVolumeSource
     */
    fsType?: string;
    /**
     * The full path to the volume on the node. It can be either a directory or block device (disk, partition, ...).
     * @type {string}
     * @memberof IoK8sApiCoreV1LocalVolumeSource
     */
    path: string;
}

export function IoK8sApiCoreV1LocalVolumeSourceFromJSON(json: any): IoK8sApiCoreV1LocalVolumeSource {
    return {
        'fsType': !exists(json, 'fsType') ? undefined : json['fsType'],
        'path': json['path'],
    };
}

export function IoK8sApiCoreV1LocalVolumeSourceToJSON(value?: IoK8sApiCoreV1LocalVolumeSource): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'fsType': value.fsType,
        'path': value.path,
    };
}

