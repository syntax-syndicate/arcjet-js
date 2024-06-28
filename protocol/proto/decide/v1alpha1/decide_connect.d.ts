// @generated by protoc-gen-connect-es v1.4.0
// @generated from file proto/decide/v1alpha1/decide.proto (package proto.decide.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { DecideRequest, DecideResponse, ReportRequest, ReportResponse } from "./decide_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service proto.decide.v1alpha1.DecideService
 */
export declare const DecideService: {
  readonly typeName: "proto.decide.v1alpha1.DecideService",
  readonly methods: {
    /**
     * @generated from rpc proto.decide.v1alpha1.DecideService.Decide
     */
    readonly decide: {
      readonly name: "Decide",
      readonly I: typeof DecideRequest,
      readonly O: typeof DecideResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc proto.decide.v1alpha1.DecideService.Report
     */
    readonly report: {
      readonly name: "Report",
      readonly I: typeof ReportRequest,
      readonly O: typeof ReportResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};
