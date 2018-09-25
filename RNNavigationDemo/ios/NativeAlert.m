//
//  NativeAlert.m
//  RNNavigationDemo
//
//  Created by 彭柯柱 on 2018/9/23.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "NativeAlert.h"
#import <UIKit/UIKit.h>

@implementation NativeAlert

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(showAlert:(NSDictionary *)alertDetails) {
  NSLog(@"alertDetails>>>>>: %@", alertDetails);
}

- (NSDictionary *)constantsToExport {
  return @{@"deviceName" : UIDevice.currentDevice.name};
}

@end
