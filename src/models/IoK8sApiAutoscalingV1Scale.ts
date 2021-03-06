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
import {
    IoK8sApiAutoscalingV1ScaleSpec,
    IoK8sApiAutoscalingV1ScaleSpecFromJSON,
    IoK8sApiAutoscalingV1ScaleSpecToJSON,
    IoK8sApiAutoscalingV1ScaleStatus,
    IoK8sApiAutoscalingV1ScaleStatusFromJSON,
    IoK8sApiAutoscalingV1ScaleStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './index.ts';

/**
 * Scale represents a scaling request for a resource.
 * @export
 * @interface IoK8sApiAutoscalingV1Scale
 */
export interface IoK8sApiAutoscalingV1Scale {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAutoscalingV1Scale
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAutoscalingV1Scale
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAutoscalingV1Scale
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiAutoscalingV1ScaleSpec}
     * @memberof IoK8sApiAutoscalingV1Scale
     */
    spec?: IoK8sApiAutoscalingV1ScaleSpec;
    /**
     * 
     * @type {IoK8sApiAutoscalingV1ScaleStatus}
     * @memberof IoK8sApiAutoscalingV1Scale
     */
    status?: IoK8sApiAutoscalingV1ScaleStatus;
}

export function IoK8sApiAutoscalingV1ScaleFromJSON(json: any): IoK8sApiAutoscalingV1Scale {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiAutoscalingV1ScaleSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiAutoscalingV1ScaleStatusFromJSON(json['status']),
    };
}

export function IoK8sApiAutoscalingV1ScaleToJSON(value?: IoK8sApiAutoscalingV1Scale): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiAutoscalingV1ScaleSpecToJSON(value.spec),
        'status': IoK8sApiAutoscalingV1ScaleStatusToJSON(value.status),
    };
}


