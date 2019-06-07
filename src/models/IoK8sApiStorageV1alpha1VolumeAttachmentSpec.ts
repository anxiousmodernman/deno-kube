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
    IoK8sApiStorageV1alpha1VolumeAttachmentSource,
    IoK8sApiStorageV1alpha1VolumeAttachmentSourceFromJSON,
    IoK8sApiStorageV1alpha1VolumeAttachmentSourceToJSON,
} from './';

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 * @export
 * @interface IoK8sApiStorageV1alpha1VolumeAttachmentSpec
 */
export interface IoK8sApiStorageV1alpha1VolumeAttachmentSpec {
    /**
     * Attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
     * @type {string}
     * @memberof IoK8sApiStorageV1alpha1VolumeAttachmentSpec
     */
    attacher: string;
    /**
     * The node that the volume should be attached to.
     * @type {string}
     * @memberof IoK8sApiStorageV1alpha1VolumeAttachmentSpec
     */
    nodeName: string;
    /**
     * 
     * @type {IoK8sApiStorageV1alpha1VolumeAttachmentSource}
     * @memberof IoK8sApiStorageV1alpha1VolumeAttachmentSpec
     */
    source: IoK8sApiStorageV1alpha1VolumeAttachmentSource;
}

export function IoK8sApiStorageV1alpha1VolumeAttachmentSpecFromJSON(json: any): IoK8sApiStorageV1alpha1VolumeAttachmentSpec {
    return {
        'attacher': json['attacher'],
        'nodeName': json['nodeName'],
        'source': IoK8sApiStorageV1alpha1VolumeAttachmentSourceFromJSON(json['source']),
    };
}

export function IoK8sApiStorageV1alpha1VolumeAttachmentSpecToJSON(value?: IoK8sApiStorageV1alpha1VolumeAttachmentSpec): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'attacher': value.attacher,
        'nodeName': value.nodeName,
        'source': IoK8sApiStorageV1alpha1VolumeAttachmentSourceToJSON(value.source),
    };
}

