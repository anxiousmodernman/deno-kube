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
    IoK8sApiExtensionsV1beta1IPBlock,
    IoK8sApiExtensionsV1beta1IPBlockFromJSON,
    IoK8sApiExtensionsV1beta1IPBlockToJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelector,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON,
    IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON,
} from './index.ts';

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPeer is deprecated by networking/v1/NetworkPolicyPeer.
 * @export
 * @interface IoK8sApiExtensionsV1beta1NetworkPolicyPeer
 */
export interface IoK8sApiExtensionsV1beta1NetworkPolicyPeer {
    /**
     * 
     * @type {IoK8sApiExtensionsV1beta1IPBlock}
     * @memberof IoK8sApiExtensionsV1beta1NetworkPolicyPeer
     */
    ipBlock?: IoK8sApiExtensionsV1beta1IPBlock;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
     * @memberof IoK8sApiExtensionsV1beta1NetworkPolicyPeer
     */
    namespaceSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1LabelSelector}
     * @memberof IoK8sApiExtensionsV1beta1NetworkPolicyPeer
     */
    podSelector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
}

export function IoK8sApiExtensionsV1beta1NetworkPolicyPeerFromJSON(json: any): IoK8sApiExtensionsV1beta1NetworkPolicyPeer {
    return {
        'ipBlock': !exists(json, 'ipBlock') ? undefined : IoK8sApiExtensionsV1beta1IPBlockFromJSON(json['ipBlock']),
        'namespaceSelector': !exists(json, 'namespaceSelector') ? undefined : IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['namespaceSelector']),
        'podSelector': !exists(json, 'podSelector') ? undefined : IoK8sApimachineryPkgApisMetaV1LabelSelectorFromJSON(json['podSelector']),
    };
}

export function IoK8sApiExtensionsV1beta1NetworkPolicyPeerToJSON(value?: IoK8sApiExtensionsV1beta1NetworkPolicyPeer): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'ipBlock': IoK8sApiExtensionsV1beta1IPBlockToJSON(value.ipBlock),
        'namespaceSelector': IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.namespaceSelector),
        'podSelector': IoK8sApimachineryPkgApisMetaV1LabelSelectorToJSON(value.podSelector),
    };
}


