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
 * AllowedHostPath defines the host volume conditions that will be enabled by a policy for pods to use. It requires the path prefix to be defined.
 * @export
 * @interface IoK8sApiPolicyV1beta1AllowedHostPath
 */
export interface IoK8sApiPolicyV1beta1AllowedHostPath {
    /**
     * pathPrefix is the path prefix that the host volume must match. It does not support `*`. Trailing slashes are trimmed when validating the path prefix with a host path.  Examples: `/foo` would allow `/foo`, `/foo/` and `/foo/bar` `/foo` would not allow `/food` or `/etc/foo`
     * @type {string}
     * @memberof IoK8sApiPolicyV1beta1AllowedHostPath
     */
    pathPrefix?: string;
    /**
     * when set to true, will allow host volumes matching the pathPrefix only if all volume mounts are readOnly.
     * @type {boolean}
     * @memberof IoK8sApiPolicyV1beta1AllowedHostPath
     */
    readOnly?: boolean;
}

export function IoK8sApiPolicyV1beta1AllowedHostPathFromJSON(json: any): IoK8sApiPolicyV1beta1AllowedHostPath {
    return {
        'pathPrefix': !exists(json, 'pathPrefix') ? undefined : json['pathPrefix'],
        'readOnly': !exists(json, 'readOnly') ? undefined : json['readOnly'],
    };
}

export function IoK8sApiPolicyV1beta1AllowedHostPathToJSON(value?: IoK8sApiPolicyV1beta1AllowedHostPath): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'pathPrefix': value.pathPrefix,
        'readOnly': value.readOnly,
    };
}

