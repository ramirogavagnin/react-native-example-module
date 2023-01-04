
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNExampleModuleSpec.h"

@interface ExampleModule : NSObject <NativeExampleModuleSpec>
#else
#import <React/RCTBridgeModule.h>

@interface ExampleModule : NSObject <RCTBridgeModule>
#endif

@end
