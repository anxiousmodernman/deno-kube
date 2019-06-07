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
    IoK8sApiSettingsV1alpha1PodPreset,
    IoK8sApiSettingsV1alpha1PodPresetFromJSON,
    IoK8sApiSettingsV1alpha1PodPresetToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * PodPresetList is a list of PodPreset objects.
 * @export
 * @interface IoK8sApiSettingsV1alpha1PodPresetList
 */
export interface IoK8sApiSettingsV1alpha1PodPresetList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiSettingsV1alpha1PodPresetList
     */
    apiVersion?: string;
    /**
     * Items is a list of schema objects.
     * @type {Array<IoK8sApiSettingsV1alpha1PodPreset>}
     * @memberof IoK8sApiSettingsV1alpha1PodPresetList
     */
    items: Array<IoK8sApiSettingsV1alpha1PodPreset>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiSettingsV1alpha1PodPresetList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiSettingsV1alpha1PodPresetList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiSettingsV1alpha1PodPresetListFromJSON(json: any): IoK8sApiSettingsV1alpha1PodPresetList {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': (json['items'] as Array<any>).map(IoK8sApiSettingsV1alpha1PodPresetFromJSON),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiSettingsV1alpha1PodPresetListToJSON(value?: IoK8sApiSettingsV1alpha1PodPresetList): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'items': (value.items as Array<any>).map(IoK8sApiSettingsV1alpha1PodPresetToJSON),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}

