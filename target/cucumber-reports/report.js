$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/calculator.feature");
formatter.feature({
  "name": "Test Calculator",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test Plus Operator on Calculator",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the calculator app",
  "keyword": "Given "
});
formatter.step({
  "name": "I click \u003cnumber1\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I click plus",
  "keyword": "And "
});
formatter.step({
  "name": "I click \u003cnumber2\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click equals",
  "keyword": "And "
});
formatter.step({
  "name": "the result should be \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "number1",
        "number2",
        "result"
      ]
    },
    {
      "cells": [
        "1",
        "2",
        "3"
      ]
    },
    {
      "cells": [
        "1",
        "1",
        "2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test Plus Operator on Calculator",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the calculator app",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefcalulator.i_am_on_the_calculator_app()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class Stepdefcalulator - this class doesn\u0027t have an empty or a page enabled constructor\"\r\n\tat cucumber.runtime.SerenityObjectFactory.newInstance(SerenityObjectFactory.java:66)\r\n\tat cucumber.runtime.SerenityObjectFactory.cacheNewInstance(SerenityObjectFactory.java:51)\r\n\tat cucumber.runtime.SerenityObjectFactory.getInstance(SerenityObjectFactory.java:41)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.runTestClass(JUnitTestClassExecutor.java:110)\r\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:58)\r\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecutor.execute(JUnitTestClassExecutor.java:38)\r\n\tat org.gradle.api.internal.tasks.testing.junit.AbstractJUnitTestClassProcessor.processTestClass(AbstractJUnitTestClassProcessor.java:62)\r\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:51)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\r\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\r\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:33)\r\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:94)\r\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\r\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:118)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:36)\r\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\r\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:182)\r\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:164)\r\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:412)\r\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:64)\r\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:48)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\r\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:56)\r\n\tat java.base/java.lang.Thread.run(Thread.java:834)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat cucumber.runtime.SerenityObjectFactory.newInstance(SerenityObjectFactory.java:63)\r\n\t... 57 more\r\nCaused by: org.openqa.selenium.WebDriverException: It is impossible to create a new session because \u0027createSession\u0027 which takes HttpClient, InputStream and long was not found or it is not accessible\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027PC0373\u0027, ip: \u0027192.168.178.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: AndroidDriver\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor$1.createSession(AppiumCommandExecutor.java:195)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.createSession(AppiumCommandExecutor.java:209)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:231)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.\u003cinit\u003e(DefaultGenericMobileDriver.java:38)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:84)\r\n\tat io.appium.java_client.AppiumDriver.\u003cinit\u003e(AppiumDriver.java:94)\r\n\tat io.appium.java_client.android.AndroidDriver.\u003cinit\u003e(AndroidDriver.java:93)\r\n\tat setUpdriver.setUpAppium(setUpdriver.java:24)\r\n\tat Stepdefcalulator.\u003cinit\u003e(Stepdefcalulator.java:20)\r\n\t... 62 more\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor$1.createSession(AppiumCommandExecutor.java:185)\r\n\t... 76 more\r\nCaused by: org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Cannot start the \u0027io.appium.unlock\u0027 application. Visit https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/android/activity-startup.md for troubleshooting. Original error: Error executing adbExec. Original error: \u0027Command \u0027C\\:\\\\Users\\\\bali\\\\AppData\\\\Local\\\\Android\\\\Sdk\\\\platform-tools\\\\adb.exe -P 5037 -s 988633483636445935 shell am start -W -n io.appium.unlock/.Unlock -a android.intent.action.MAIN -c android.intent.category.LAUNCHER -f 0x10200000\u0027 timed out after 20000ms\u0027; Stderr: \u0027\u0027; Code: \u0027null\u0027\nBuild info: version: \u00273.141.5\u0027, revision: \u0027d54ebd709a\u0027, time: \u00272018-11-06T11:42:16\u0027\nSystem info: host: \u0027PC0373\u0027, ip: \u0027192.168.178.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: AndroidDriver\nremote stacktrace: UnknownError: An unknown server-side error occurred while processing the command. Original error: Cannot start the \u0027io.appium.unlock\u0027 application. Visit https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/android/activity-startup.md for troubleshooting. Original error: Error executing adbExec. Original error: \u0027Command \u0027C\\:\\\\Users\\\\bali\\\\AppData\\\\Local\\\\Android\\\\Sdk\\\\platform-tools\\\\adb.exe -P 5037 -s 988633483636445935 shell am start -W -n io.appium.unlock/.Unlock -a android.intent.action.MAIN -c android.intent.category.LAUNCHER -f 0x10200000\u0027 timed out after 20000ms\u0027; Stderr: \u0027\u0027; Code: \u0027null\u0027\n    at getResponseForW3CError (C:\\Users\\bali\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\protocol\\errors.js:826:9)\n    at asyncHandler$ (C:\\Users\\bali\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\protocol\\protocol.js:404:37)\n    at tryCatch (C:\\Users\\bali\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\babel-runtime\\regenerator\\runtime.js:67:40)\n    at GeneratorFunctionPrototype.invoke [as _invoke] (C:\\Users\\bali\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\babel-runtime\\regenerator\\runtime.js:315:22)\n    at GeneratorFunctionPrototype.prototype.(anonymous function) [as next] (C:\\Users\\bali\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\babel-runtime\\regenerator\\runtime.js:100:21)\n    at GeneratorFunctionPrototype.invoke (C:\\Users\\bali\\AppData\\Local\\Programs\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\babel-runtime\\regenerator\\runtime.js:136:37)\n    at run (C:\\Users\\bali\\AppData\\Local\\Programs\\Appium\\resources\\app\\webpack:\\~\\babel-polyfill\\~\\core-js\\modules\\es6.promise.js:75:1)\n    at C:\\Users\\bali\\AppData\\Local\\Programs\\Appium\\resources\\app\\webpack:\\~\\babel-polyfill\\~\\core-js\\modules\\es6.promise.js:92:1\n    at flush (C:\\Users\\bali\\AppData\\Local\\Programs\\Appium\\resources\\app\\webpack:\\~\\babel-polyfill\\~\\core-js\\modules\\_microtask.js:18:1)\n    at process._tickCallback (internal/process/next_tick.js:61:11)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:125)\r\n\t... 81 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click 1",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefcalulator.i_click(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click plus",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefcalulator.i_click_plus()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click 2",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefcalulator.i_click(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click equals",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefcalulator.i_click_equals()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the result should be 3",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefcalulator.the_result_should_be(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Test Plus Operator on Calculator",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on the calculator app",
  "keyword": "Given "
});
