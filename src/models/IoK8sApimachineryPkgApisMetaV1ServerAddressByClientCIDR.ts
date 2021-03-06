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
/**
 * ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.
 * @export
 * @interface IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR
 */
export interface IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR {
    /**
     * The CIDR with which clients can match their IP to figure out the server address that they should use.
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR
     */
    clientCIDR: string;
    /**
     * Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port.
     * @type {string}
     * @memberof IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR
     */
    serverAddress: string;
}

export function IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRFromJSON(json: any): IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR {
    return {
        'clientCIDR': json['clientCIDR'],
        'serverAddress': json['serverAddress'],
    };
}

export function IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRToJSON(value?: IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'clientCIDR': value.clientCIDR,
        'serverAddress': value.serverAddress,
    };
}


