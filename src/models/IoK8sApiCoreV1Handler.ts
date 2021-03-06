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
    IoK8sApiCoreV1ExecAction,
    IoK8sApiCoreV1ExecActionFromJSON,
    IoK8sApiCoreV1ExecActionToJSON,
    IoK8sApiCoreV1HTTPGetAction,
    IoK8sApiCoreV1HTTPGetActionFromJSON,
    IoK8sApiCoreV1HTTPGetActionToJSON,
    IoK8sApiCoreV1TCPSocketAction,
    IoK8sApiCoreV1TCPSocketActionFromJSON,
    IoK8sApiCoreV1TCPSocketActionToJSON,
} from './index.ts';

/**
 * Handler defines a specific action that should be taken
 * @export
 * @interface IoK8sApiCoreV1Handler
 */
export interface IoK8sApiCoreV1Handler {
    /**
     * 
     * @type {IoK8sApiCoreV1ExecAction}
     * @memberof IoK8sApiCoreV1Handler
     */
    exec?: IoK8sApiCoreV1ExecAction;
    /**
     * 
     * @type {IoK8sApiCoreV1HTTPGetAction}
     * @memberof IoK8sApiCoreV1Handler
     */
    httpGet?: IoK8sApiCoreV1HTTPGetAction;
    /**
     * 
     * @type {IoK8sApiCoreV1TCPSocketAction}
     * @memberof IoK8sApiCoreV1Handler
     */
    tcpSocket?: IoK8sApiCoreV1TCPSocketAction;
}

export function IoK8sApiCoreV1HandlerFromJSON(json: any): IoK8sApiCoreV1Handler {
    return {
        'exec': !exists(json, 'exec') ? undefined : IoK8sApiCoreV1ExecActionFromJSON(json['exec']),
        'httpGet': !exists(json, 'httpGet') ? undefined : IoK8sApiCoreV1HTTPGetActionFromJSON(json['httpGet']),
        'tcpSocket': !exists(json, 'tcpSocket') ? undefined : IoK8sApiCoreV1TCPSocketActionFromJSON(json['tcpSocket']),
    };
}

export function IoK8sApiCoreV1HandlerToJSON(value?: IoK8sApiCoreV1Handler): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'exec': IoK8sApiCoreV1ExecActionToJSON(value.exec),
        'httpGet': IoK8sApiCoreV1HTTPGetActionToJSON(value.httpGet),
        'tcpSocket': IoK8sApiCoreV1TCPSocketActionToJSON(value.tcpSocket),
    };
}


