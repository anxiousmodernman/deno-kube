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
import {
    IoK8sApiCoreV1VolumeProjection,
    IoK8sApiCoreV1VolumeProjectionFromJSON,
    IoK8sApiCoreV1VolumeProjectionToJSON,
} from './';

/**
 * Represents a projected volume source
 * @export
 * @interface IoK8sApiCoreV1ProjectedVolumeSource
 */
export interface IoK8sApiCoreV1ProjectedVolumeSource {
    /**
     * Mode bits to use on created files by default. Must be a value between 0 and 0777. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     * @type {number}
     * @memberof IoK8sApiCoreV1ProjectedVolumeSource
     */
    defaultMode?: number;
    /**
     * list of volume projections
     * @type {Array<IoK8sApiCoreV1VolumeProjection>}
     * @memberof IoK8sApiCoreV1ProjectedVolumeSource
     */
    sources: Array<IoK8sApiCoreV1VolumeProjection>;
}

export function IoK8sApiCoreV1ProjectedVolumeSourceFromJSON(json: any): IoK8sApiCoreV1ProjectedVolumeSource {
    return {
        'defaultMode': !exists(json, 'defaultMode') ? undefined : json['defaultMode'],
        'sources': (json['sources'] as Array<any>).map(IoK8sApiCoreV1VolumeProjectionFromJSON),
    };
}

export function IoK8sApiCoreV1ProjectedVolumeSourceToJSON(value?: IoK8sApiCoreV1ProjectedVolumeSource): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'defaultMode': value.defaultMode,
        'sources': (value.sources as Array<any>).map(IoK8sApiCoreV1VolumeProjectionToJSON),
    };
}

