//
//  EventTester.m
//  RNNavigationDemo
//
//  Created by 彭柯柱 on 2018/9/23.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "EventTester.h"

@implementation EventTester

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents {
  return @[@"eventName"];
}

RCT_EXPORT_METHOD(testSendEvent) {
  
  dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(3 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
      [self sendEventWithName:@"eventName" body:@"ios event"];
  });
}

@end
