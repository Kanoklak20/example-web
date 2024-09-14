/**
 * FlowAccount Business API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { BatchImportMetadata } from '../model/batchImportMetadata';
import { BatchImportPayload } from '../model/batchImportPayload';
import { BatchMessageSent } from '../model/batchMessageSent';
import { BatchStatus } from '../model/batchStatus';
import { InlineDocument } from '../model/inlineDocument';
import { PaymentModel } from '../model/paymentModel';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://openapi.flowaccount.com/test';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum CashInvoiceApiApiKeys {
}

export class CashInvoiceApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'bearer': new HttpBearerAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: CashInvoiceApiApiKeys, value: string) {
        (this.authentications as any)[CashInvoiceApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.bearer.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @param culture 
     * @param batchImportPayload 
     */
    public async cashInvoiceActorCreateCashInvoice (culture: string, batchImportPayload: BatchImportPayload, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BatchMessageSent;  }> {
        const localVarPath = this.basePath + '/{culture}/cash-invoices/simple-document'
            .replace('{' + 'culture' + '}', encodeURIComponent(String(culture)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'culture' is not null or undefined
        if (culture === null || culture === undefined) {
            throw new Error('Required parameter culture was null or undefined when calling cashInvoiceActorCreateCashInvoice.');
        }

        // verify required parameter 'batchImportPayload' is not null or undefined
        if (batchImportPayload === null || batchImportPayload === undefined) {
            throw new Error('Required parameter batchImportPayload was null or undefined when calling cashInvoiceActorCreateCashInvoice.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(batchImportPayload, "BatchImportPayload")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: BatchMessageSent;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "BatchMessageSent");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @param culture 
     * @param inlineDocument 
     * @param batchId 
     */
    public async cashInvoiceActorCreateCashInvoiceInline (culture: string, inlineDocument: Array<InlineDocument>, batchId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BatchMessageSent;  }> {
        const localVarPath = this.basePath + '/{culture}/cash-invoices/inline-document'
            .replace('{' + 'culture' + '}', encodeURIComponent(String(culture)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'culture' is not null or undefined
        if (culture === null || culture === undefined) {
            throw new Error('Required parameter culture was null or undefined when calling cashInvoiceActorCreateCashInvoiceInline.');
        }

        // verify required parameter 'inlineDocument' is not null or undefined
        if (inlineDocument === null || inlineDocument === undefined) {
            throw new Error('Required parameter inlineDocument was null or undefined when calling cashInvoiceActorCreateCashInvoiceInline.');
        }

        if (batchId !== undefined) {
            localVarQueryParameters['batchId'] = ObjectSerializer.serialize(batchId, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(inlineDocument, "Array<InlineDocument>")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: BatchMessageSent;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "BatchMessageSent");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @param culture 
     * @param body 
     */
    public async cashInvoiceActorQueryBatch (culture: string, body: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BatchStatus;  }> {
        const localVarPath = this.basePath + '/{culture}/cash-invoices/batch-progress-report'
            .replace('{' + 'culture' + '}', encodeURIComponent(String(culture)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'culture' is not null or undefined
        if (culture === null || culture === undefined) {
            throw new Error('Required parameter culture was null or undefined when calling cashInvoiceActorQueryBatch.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling cashInvoiceActorQueryBatch.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "string")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: BatchStatus;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "BatchStatus");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @param documentId 
     * @param statusKey 
     * @param culture 
     */
    public async cashInvoiceChangeStatusByKey (documentId: number, statusKey: string, culture: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
        const localVarPath = this.basePath + '/{culture}/cash-invoices/{documentId}/status-key/{statusKey}'
            .replace('{' + 'documentId' + '}', encodeURIComponent(String(documentId)))
            .replace('{' + 'statusKey' + '}', encodeURIComponent(String(statusKey)))
            .replace('{' + 'culture' + '}', encodeURIComponent(String(culture)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/octet-stream'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'documentId' is not null or undefined
        if (documentId === null || documentId === undefined) {
            throw new Error('Required parameter documentId was null or undefined when calling cashInvoiceChangeStatusByKey.');
        }

        // verify required parameter 'statusKey' is not null or undefined
        if (statusKey === null || statusKey === undefined) {
            throw new Error('Required parameter statusKey was null or undefined when calling cashInvoiceChangeStatusByKey.');
        }

        // verify required parameter 'culture' is not null or undefined
        if (culture === null || culture === undefined) {
            throw new Error('Required parameter culture was null or undefined when calling cashInvoiceChangeStatusByKey.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Buffer;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Buffer");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @param id 
     * @param culture 
     */
    public async cashInvoiceDetails (id: number, culture: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
        const localVarPath = this.basePath + '/{culture}/cash-invoices/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'culture' + '}', encodeURIComponent(String(culture)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/octet-stream'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling cashInvoiceDetails.');
        }

        // verify required parameter 'culture' is not null or undefined
        if (culture === null || culture === undefined) {
            throw new Error('Required parameter culture was null or undefined when calling cashInvoiceDetails.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Buffer;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Buffer");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @param culture 
     * @param fileName 
     */
    public async cashInvoiceGenerateBacthIdMetadata (culture: string, fileName?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: BatchImportMetadata;  }> {
        const localVarPath = this.basePath + '/{culture}/cash-invoices/batch-metadata'
            .replace('{' + 'culture' + '}', encodeURIComponent(String(culture)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'culture' is not null or undefined
        if (culture === null || culture === undefined) {
            throw new Error('Required parameter culture was null or undefined when calling cashInvoiceGenerateBacthIdMetadata.');
        }

        if (fileName !== undefined) {
            localVarQueryParameters['fileName'] = ObjectSerializer.serialize(fileName, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: BatchImportMetadata;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "BatchImportMetadata");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @param culture 
     * @param sortBy 
     * @param currentPage 
     * @param pageSize 
     * @param filter 
     * @param searchString 
     * @param customDocumentModels 
     * @param range 
     * @param month 
     * @param year 
     * @param startDate 
     * @param endDate 
     */
    public async cashInvoiceIndex (culture: string, sortBy?: string, currentPage?: string, pageSize?: string, filter?: string, searchString?: string, customDocumentModels?: string, range?: string, month?: string, year?: string, startDate?: string, endDate?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
        const localVarPath = this.basePath + '/{culture}/cash-invoices'
            .replace('{' + 'culture' + '}', encodeURIComponent(String(culture)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/octet-stream'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'culture' is not null or undefined
        if (culture === null || culture === undefined) {
            throw new Error('Required parameter culture was null or undefined when calling cashInvoiceIndex.');
        }

        if (sortBy !== undefined) {
            localVarQueryParameters['SortBy'] = ObjectSerializer.serialize(sortBy, "string");
        }

        if (currentPage !== undefined) {
            localVarQueryParameters['CurrentPage'] = ObjectSerializer.serialize(currentPage, "string");
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['PageSize'] = ObjectSerializer.serialize(pageSize, "string");
        }

        if (filter !== undefined) {
            localVarQueryParameters['Filter'] = ObjectSerializer.serialize(filter, "string");
        }

        if (searchString !== undefined) {
            localVarQueryParameters['SearchString'] = ObjectSerializer.serialize(searchString, "string");
        }

        if (customDocumentModels !== undefined) {
            localVarQueryParameters['CustomDocumentModels'] = ObjectSerializer.serialize(customDocumentModels, "string");
        }

        if (range !== undefined) {
            localVarQueryParameters['Range'] = ObjectSerializer.serialize(range, "string");
        }

        if (month !== undefined) {
            localVarQueryParameters['Month'] = ObjectSerializer.serialize(month, "string");
        }

        if (year !== undefined) {
            localVarQueryParameters['Year'] = ObjectSerializer.serialize(year, "string");
        }

        if (startDate !== undefined) {
            localVarQueryParameters['StartDate'] = ObjectSerializer.serialize(startDate, "string");
        }

        if (endDate !== undefined) {
            localVarQueryParameters['EndDate'] = ObjectSerializer.serialize(endDate, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Buffer;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Buffer");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @param id 
     * @param culture 
     * @param paymentModel 
     */
    public async cashInvoiceReceivePayment (id: number, culture: string, paymentModel: PaymentModel, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Buffer;  }> {
        const localVarPath = this.basePath + '/{culture}/cash-invoices/{id}/payments'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'culture' + '}', encodeURIComponent(String(culture)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/octet-stream'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling cashInvoiceReceivePayment.');
        }

        // verify required parameter 'culture' is not null or undefined
        if (culture === null || culture === undefined) {
            throw new Error('Required parameter culture was null or undefined when calling cashInvoiceReceivePayment.');
        }

        // verify required parameter 'paymentModel' is not null or undefined
        if (paymentModel === null || paymentModel === undefined) {
            throw new Error('Required parameter paymentModel was null or undefined when calling cashInvoiceReceivePayment.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
            body: ObjectSerializer.serialize(paymentModel, "PaymentModel")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Buffer;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Buffer");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
