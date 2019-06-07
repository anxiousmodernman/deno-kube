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
    IoK8sApiNetworkingV1beta1IngressBackend,
    IoK8sApiNetworkingV1beta1IngressBackendFromJSON,
    IoK8sApiNetworkingV1beta1IngressBackendToJSON,
} from './';

/**
 * HTTPIngressPath associates a path regex with a backend. Incoming urls matching the path are forwarded to the backend.
 * @export
 * @interface IoK8sApiNetworkingV1beta1HTTPIngressPath
 */
export interface IoK8sApiNetworkingV1beta1HTTPIngressPath {
    /**
     * 
     * @type {IoK8sApiNetworkingV1beta1IngressBackend}
     * @memberof IoK8sApiNetworkingV1beta1HTTPIngressPath
     */
    backend: IoK8sApiNetworkingV1beta1IngressBackend;
    /**
     * Path is an extended POSIX regex as defined by IEEE Std 1003.1, (i.e this follows the egrep/unix syntax, not the perl syntax) matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional \"path\" part of a URL as defined by RFC 3986. Paths must begin with a \'/\'. If unspecified, the path defaults to a catch all sending traffic to the backend.
     * @type {string}
     * @memberof IoK8sApiNetworkingV1beta1HTTPIngressPath
     */
    path?: string;
}

export function IoK8sApiNetworkingV1beta1HTTPIngressPathFromJSON(json: any): IoK8sApiNetworkingV1beta1HTTPIngressPath {
    return {
        'backend': IoK8sApiNetworkingV1beta1IngressBackendFromJSON(json['backend']),
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function IoK8sApiNetworkingV1beta1HTTPIngressPathToJSON(value?: IoK8sApiNetworkingV1beta1HTTPIngressPath): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'backend': IoK8sApiNetworkingV1beta1IngressBackendToJSON(value.backend),
        'path': value.path,
    };
}

