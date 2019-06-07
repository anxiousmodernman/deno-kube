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
 * WindowsSecurityContextOptions contain Windows-specific options and credentials.
 * @export
 * @interface IoK8sApiCoreV1WindowsSecurityContextOptions
 */
export interface IoK8sApiCoreV1WindowsSecurityContextOptions {
    /**
     * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field. This field is alpha-level and is only honored by servers that enable the WindowsGMSA feature flag.
     * @type {string}
     * @memberof IoK8sApiCoreV1WindowsSecurityContextOptions
     */
    gmsaCredentialSpec?: string;
    /**
     * GMSACredentialSpecName is the name of the GMSA credential spec to use. This field is alpha-level and is only honored by servers that enable the WindowsGMSA feature flag.
     * @type {string}
     * @memberof IoK8sApiCoreV1WindowsSecurityContextOptions
     */
    gmsaCredentialSpecName?: string;
}

export function IoK8sApiCoreV1WindowsSecurityContextOptionsFromJSON(json: any): IoK8sApiCoreV1WindowsSecurityContextOptions {
    return {
        'gmsaCredentialSpec': !exists(json, 'gmsaCredentialSpec') ? undefined : json['gmsaCredentialSpec'],
        'gmsaCredentialSpecName': !exists(json, 'gmsaCredentialSpecName') ? undefined : json['gmsaCredentialSpecName'],
    };
}

export function IoK8sApiCoreV1WindowsSecurityContextOptionsToJSON(value?: IoK8sApiCoreV1WindowsSecurityContextOptions): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'gmsaCredentialSpec': value.gmsaCredentialSpec,
        'gmsaCredentialSpecName': value.gmsaCredentialSpecName,
    };
}

