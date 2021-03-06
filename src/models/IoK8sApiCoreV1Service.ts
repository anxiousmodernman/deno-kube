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
    IoK8sApiCoreV1ServiceSpec,
    IoK8sApiCoreV1ServiceSpecFromJSON,
    IoK8sApiCoreV1ServiceSpecToJSON,
    IoK8sApiCoreV1ServiceStatus,
    IoK8sApiCoreV1ServiceStatusFromJSON,
    IoK8sApiCoreV1ServiceStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './index.ts';

/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 * @export
 * @interface IoK8sApiCoreV1Service
 */
export interface IoK8sApiCoreV1Service {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoreV1Service
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoreV1Service
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiCoreV1Service
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiCoreV1ServiceSpec}
     * @memberof IoK8sApiCoreV1Service
     */
    spec?: IoK8sApiCoreV1ServiceSpec;
    /**
     * 
     * @type {IoK8sApiCoreV1ServiceStatus}
     * @memberof IoK8sApiCoreV1Service
     */
    status?: IoK8sApiCoreV1ServiceStatus;
}

export function IoK8sApiCoreV1ServiceFromJSON(json: any): IoK8sApiCoreV1Service {
    return {
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiCoreV1ServiceSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiCoreV1ServiceStatusFromJSON(json['status']),
    };
}

export function IoK8sApiCoreV1ServiceToJSON(value?: IoK8sApiCoreV1Service): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiCoreV1ServiceSpecToJSON(value.spec),
        'status': IoK8sApiCoreV1ServiceStatusToJSON(value.status),
    };
}


