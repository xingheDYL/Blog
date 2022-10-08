---
title: Spirng Boot 常见面试题
date: 2022-10-04
category:
  - 面试准备
tag:
  - Spirng Boot
---
## Spirng Boot 常见面试题

### 1、简单介绍一下 Spring?有什么缺点? 

Spring 是重量级企业开发框架 **Enterprise JavaBean（EJB）** 的替代品，Spring 为企业级 Java 开发提供了一种相对简单的方法，通过**依赖注入**和**面向切面编程**，用简单的 Java 对象（Plain Old Java Object，POJO）实现了 EJB 的功能。

缺点是配置 XML 文件繁琐且难以管理相关依赖。

### 2、为什么要有 Spring Boot? 

Spring 旨在简化 J2EE 企业应用程序开发。Spring Boot 旨在简化 Spring 开发（减少配置文件，开箱即用）。

- 独立运行

Spring Boot 而且内嵌了各种 Servlet 容器，Tomcat、Jetty 等，现在不再需要打成 war 包部署到容器中，Spring Boot 只要打成一个可执行的 jar 包就能独立运行，所有的依赖包都在一个 jar 包内。

- 简化配置

spring-boot-starter-web 启动器自动依赖其他组件，减少了 maven 的配置。

- 自动配置

Spring Boot 能根据当前类路径下的类、jar 包来自动配置 bean，如添加一个 spring-boot-starter-web 启动器就能拥有 web 的功能，无需其他配置。

- 无代码生成和 XML 配置

Spring Boot 配置过程中无代码生成，也无需 XML 配置文件就能完成所有配置工作，这一切都是借助于条件注解完成的，这也是 Spring4.x 的核心功能之一。

- 应用监控

Spring Boot 提供一系列端点可以监控服务及应用，做健康检测。

### 3、说出使用 Spring Boot 的主要优点 

1. 开发基于 Spring 的应用程序很容易。

2. Spring Boot 项目所需的开发或工程时间明显减少，通常会提高整体生产力。

3. Spring Boot 不需要编写大量样板代码、XML 配置和注释。

4. Spring 引导应用程序可以很容易地与 Spring 生态系统集成，如 Spring JDBC、Spring ORM、Spring Data、Spring Security 等。
5. Spring Boot 遵循“固执己见的默认配置”，以减少开发工作（默认配置可以修改）。
6. Spring Boot 应用程序提供嵌入式 HTTP 服务器，如 Tomcat 和 Jetty，可以轻松地开发和测试 web 应用程序。
7. Spring Boot 提供命令行接口(CLI)工具，用于开发和测试 Spring Boot 应用程序，如 Java 或 Groovy。
8. Spring Boot 提供了多种插件，可以使用内置工具(如 Maven 和 Gradle)开发和测试 Spring Boot 应用程序。

### 4、什么是 Spring Boot Starters? 

Spring Boot Starters 是一系列依赖关系的集合，因为它的存在，项目的依赖之间的关系对我们来说变的更加简单了。

举个例子：在没有 Spring Boot Starters 之前，我们开发 REST 服务或 Web 应用程序时; 我们需要使用像 Spring MVC，Tomcat 和 Jackson 这样的库，这些依赖我们需要手动一个一个添加。但是，有了 Spring Boot Starters 我们只需要一个只需添加一个 spring-boot-starter-web 一个依赖就可以了，这个依赖包含的字依赖中包含了我们开发 REST 服务需要的所有依赖。

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

### 5、Spring Boot 支持哪些内嵌 Servlet 容器？ 

Spring Boot 支持以下嵌入式 Servlet 容器:

| Name         | Servlet Version |
| ------------ | --------------- |
| Tomcat 9.0   | 4.0             |
| Jetty 9.4    | 3.1             |
| Undertow 2.0 | 4.0             |

您还可以将 Spring 引导应用程序部署到任何 Servlet 3.1+ 兼容的 Web 容器中。

### 6、如何在 Spring Boot 应用程序中使用 Jetty 而不是 Tomcat? 

Spring Boot （spring-boot-starter-web）使用 Tomcat 作为默认的嵌入式 servlet 容器, 如果想使用 Jetty 的话只需要修改 pom.xml(Maven) 或者 build.gradle(Gradle) 就可以了。

**Maven**:

```xml
<!--从Web启动器依赖中排除Tomcat-->
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-web</artifactId>
	<exclusions>
		<exclusion>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-tomcat</artifactId>
		</exclusion>
	</exclusions>
</dependency>
<!--添加Jetty依赖-->
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-jetty</artifactId>
</dependency>
```

**Gradle:**

```groovy
compile("org.springframework.boot:spring-boot-starter-web") {
     exclude group: 'org.springframework.boot', module: 'spring-boot-starter-tomcat'
}
compile("org.springframework.boot:spring-boot-starter-jetty")
```

### 7、介绍一下 @SpringBootApplication 注解 

```java
package org.springframework.boot.autoconfigure;
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(excludeFilters = {
		@Filter(type = FilterType.CUSTOM, classes = TypeExcludeFilter.class),
		@Filter(type = FilterType.CUSTOM, classes = AutoConfigurationExcludeFilter.class) })
public @interface SpringBootApplication {
   ......
}
```

```java
package org.springframework.boot;
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Configuration
public @interface SpringBootConfiguration {

}
```

可以看出大概可以把 @SpringBootApplication 看作是 @Configuration、@EnableAutoConfiguration、@ComponentScan 注解的集合。根据 SpringBoot 官网，这三个注解的作用分别是：

- @Configuration：允许在上下文中注册额外的 bean 或导入其他配置类
- @EnableAutoConfiguration：启用 SpringBoot 的自动配置机制
- @ComponentScan：扫描被 @Component (@Service,@Controller)注解的 bean，注解默认会扫描该类所在的包下所有的类。

### 8、开发 RESTful Web 服务常用的注解有哪些？ 

Spring Bean 相关：

- @Autowired: 自动导入对象到类中，被注入进的类同样要被 Spring 容器管理。
- @RestController: @RestController注解是 @Controller 和 @ResponseBody 的合集,表示这是个控制器 bean,并且是将函数的返回值直接填入 HTTP 响应体中,是 REST 风格的控制器。
- @Component：通用的注解，可标注任意类为 Spring 组件。如果一个 Bean 不知道属于哪个层，可以使用 @Component 注解标注。
- @Repository: 对应持久层即 Dao 层，主要用于数据库相关操作。
- @Service: 对应服务层，主要涉及一些复杂的逻辑，需要用到 Dao 层。
- @Controller: 对应 Spring MVC 控制层，主要用于接受用户请求并调用 Service 层返回数据给前端页面。

处理常见的 HTTP 请求类型：

- @GetMapping: GET 请求、
- @PostMapping: POST 请求。
- @PutMapping: PUT 请求。
- @DeleteMapping: DELETE 请求。

前后端传值：

- @RequestParam 以及 @PathVariable：@PathVariable 用于获取路径参数，@RequestParam 用于获取查询参数。
- @RequestBody ：用于读取 Request 请求（可能是 POST,PUT,DELETE,GET 请求）的 body 部分并且 Content-Type 为 application/json 格式的数据，接收到数据之后会自动将数据绑定到 Java 对象上去。系统会使用 HttpMessageConverter 或者自定义的 HttpMessageConverter 将请求的 body 中的 json 字符串转换为 java 对象。

详细介绍可以查看这篇文章：[《Spring/Spring Boot 常用注解总结》](https://javaguide.cn/system-design/framework/spring/spring-common-annotations.html) 。

### 9、Spirng Boot 常用的两种配置文件 

我们可以通过 application.properties或者 application.yml 对 Spring Boot 程序进行简单的配置。

### 10、什么是 YAML？YAML 配置的优势在哪里 ? 

相比于 Properties 配置的方式，YAML 配置的方式更加直观清晰，简介明了，有层次感。

但是，YAML 配置的方式有一个缺点，那就是不支持 @PropertySource 注解导入自定义的 YAML 配置。

### 11、Spring Boot 常用的读取配置文件的方法有哪些？ 

我们要读取的配置文件 application.yml 内容如下：

```yaml
wuhan2020: 2020年初武汉爆发了新型冠状病毒，疫情严重，但是，我相信一切都会过去！武汉加油！中国加油！

my-profile:
  name: Guide哥
  email: koushuangbwcx@163.com

library:
  location: 湖北武汉加油中国加油
  books:
    - name: 天才基本法
      description: 二十二岁的林朝夕在父亲确诊阿尔茨海默病这天，得知自己暗恋多年的校园男神裴之即将出国深造的消息——对方考取的学校，恰是父亲当年为她放弃的那所。
    - name: 时间的秩序
      description: 为什么我们记得过去，而非未来？时间“流逝”意味着什么？是我们存在于时间之内，还是时间存在于我们之中？卡洛·罗韦利用诗意的文字，邀请我们思考这一亘古难题——时间的本质。
    - name: 了不起的我
      description: 如何养成一个新习惯？如何让心智变得更成熟？如何拥有高质量的关系？ 如何走出人生的艰难时刻？
```

#### 11.1 通过 @value 读取比较简单的配置信息 

使用 @Value("${property}") 读取比较简单的配置信息：

```java
@Value("${wuhan2020}")
String wuhan2020;
```

需要注意的是 @value 这种方式是不被推荐的，Spring 比较建议的是下面几种读取配置信息的方式。

#### 11.2 通过 @ConfigurationProperties 读取并与 bean 绑定 

LibraryProperties 类上加了 @Component 注解，我们可以像使用普通 bean 一样将其注入到类中使用。

```java

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@ConfigurationProperties(prefix = "library")
@Setter
@Getter
@ToString
class LibraryProperties {
    private String location;
    private List<Book> books;

    @Setter
    @Getter
    @ToString
    static class Book {
        String name;
        String description;
    }
}
```

这个时候你就可以像使用普通 bean 一样，将其注入到类中使用：

```java
package cn.javaguide.readconfigproperties;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author shuang.kou
 */
@SpringBootApplication
public class ReadConfigPropertiesApplication implements InitializingBean {

    private final LibraryProperties library;

    public ReadConfigPropertiesApplication(LibraryProperties library) {
        this.library = library;
    }

    public static void main(String[] args) {
        SpringApplication.run(ReadConfigPropertiesApplication.class, args);
    }

    @Override
    public void afterPropertiesSet() {
        System.out.println(library.getLocation());
        System.out.println(library.getBooks());    }
}
```

控制台输出：

```text
湖北武汉加油中国加油
[LibraryProperties.Book(name=天才基本法, description........]
```

#### 11.3 通过 @ConfigurationProperties 读取并校验 

我们先将 application.yml修改为如下内容，明显看出这不是一个正确的 email 格式：

```yaml
my-profile:
  name: Guide哥
  email: koushuangbwcx@
```

ProfileProperties 类没有加 @Component 注解。我们在我们要使用ProfileProperties 的地方使用@EnableConfigurationProperties 注册我们的配置 bean：

```java
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

/**
* @author shuang.kou
*/
@Getter
@Setter
@ToString
@ConfigurationProperties("my-profile")
@Validated
public class ProfileProperties {
   @NotEmpty
   private String name;

   @Email
   @NotEmpty
   private String email;

   //配置文件中没有读取到的话就用默认值
   private Boolean handsome = Boolean.TRUE;

}
```

具体使用：

```java
package cn.javaguide.readconfigproperties;

import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

/**
 * @author shuang.kou
 */
@SpringBootApplication
@EnableConfigurationProperties(ProfileProperties.class)
public class ReadConfigPropertiesApplication implements InitializingBean {
    private final ProfileProperties profileProperties;

    public ReadConfigPropertiesApplication(ProfileProperties profileProperties) {
        this.profileProperties = profileProperties;
    }

    public static void main(String[] args) {
        SpringApplication.run(ReadConfigPropertiesApplication.class, args);
    }

    @Override
    public void afterPropertiesSet() {
        System.out.println(profileProperties.toString());
    }
}
```

因为我们的邮箱格式不正确，所以程序运行的时候就报错，根本运行不起来，保证了数据类型的安全性：

```tex
Binding to target org.springframework.boot.context.properties.bind.BindException: Failed to bind properties under 'my-profile' to cn.javaguide.readconfigproperties.ProfileProperties failed:

    Property: my-profile.email
    Value: koushuangbwcx@
    Origin: class path resource [application.yml]:5:10
    Reason: must be a well-formed email address
```

我们把邮箱测试改为正确的之后再运行，控制台就能成功打印出读取到的信息：

```tex
ProfileProperties(name=Guide哥, email=koushuangbwcx@163.com, handsome=true)
```

#### 11.4 @PropertySource 读取指定的 properties 文件 

```java
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:website.properties")
@Getter
@Setter
class WebSite {
    @Value("${url}")
    private String url;
}
```

使用：

```java
@Autowired
private WebSite webSite;

System.out.println(webSite.getUrl());//https://javaguide.cn/
```

### 12、Spring Boot 加载配置文件的优先级了解么？ 

Spring 读取配置文件也是有优先级的，直接上图：

![img](https://qiniu.dyl.fit/Interview/823d9ef9-2f6d-4533-9c31-1ab278115937.jpg)

### 13、常用的 Bean 映射工具有哪些？ 

MapStruct、ModelMapper、Dozer、Orika、JMapper 是 5 种常用的 Bean 映射工具。

综合日常使用情况和相关测试数据，个人感觉 MapStruct、ModelMapper 这两个 Bean 映射框架是最佳选择。

### 14、Spring Boot 如何监控系统实际运行状况？ 

我们可以使用 Spring Boot Actuator 来对 Spring Boot 项目进行简单的监控。

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

集成了这个模块之后，你的 Spring Boot 应用程序就自带了一些开箱即用的获取程序运行时的内部状态信息的 API。

比如通过 GET 方法访问 /health 接口，你就可以获取应用程序的健康指标。

### 15、Spring Boot 如何做请求参数校验？ 

数据的校验的重要性就不用说了，即使在前端对数据进行校验的情况下，我们还是要对传入后端的数据再进行一遍校验，避免用户绕过浏览器直接通过一些 HTTP 工具直接向后端请求一些违法数据。

Spring Boot 程序做请求参数校验的话只需要 spring-boot-starter-web 依赖就够了，它的子依赖包含了我们所需要的东西。

#### 15.1 校验注解 

JSR 提供的校验注解:

- @Null 被注释的元素必须为 null
- @NotNull 被注释的元素必须不为 null
- @AssertTrue 被注释的元素必须为 true
- @AssertFalse 被注释的元素必须为 false
- @Min(value) 被注释的元素必须是一个数字，其值必须大于等于指定的最小值
- @Max(value) 被注释的元素必须是一个数字，其值必须小于等于指定的最大值
- @DecimalMin(value) 被注释的元素必须是一个数字，其值必须大于等于指定的最小值
- @DecimalMax(value) 被注释的元素必须是一个数字，其值必须小于等于指定的最大值
- @Size(max=, min=) 被注释的元素的大小必须在指定的范围内
- @Digits (integer, fraction) 被注释的元素必须是一个数字，其值必须在可接受的范围内
- @Past 被注释的元素必须是一个过去的日期
- @Future 被注释的元素必须是一个将来的日期
- @Pattern(regex=,flag=) 被注释的元素必须符合指定的正则表达式

Hibernate Validator 提供的校验注解：

- @NotBlank(message =) 验证字符串非 null，且长度必须大于 0
- @Email 被注释的元素必须是电子邮箱地址
- @Length(min=,max=) 被注释的字符串的大小必须在指定的范围内
- @NotEmpty 被注释的字符串的必须非空
- @Range(min=,max=,message=) 被注释的元素必须在合适的范围内

使用示例：

```java
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Person {

    @NotNull(message = "classId 不能为空")
    private String classId;

    @Size(max = 33)
    @NotNull(message = "name 不能为空")
    private String name;

    @Pattern(regexp = "((^Man$|^Woman$|^UGM$))", message = "sex 值不在可选范围")
    @NotNull(message = "sex 不能为空")
    private String sex;

    @Email(message = "email 格式不正确")
    @NotNull(message = "email 不能为空")
    private String email;

}
```

#### 15.2 验证请求体(RequestBody) 

我们在需要验证的参数上加上了 @Valid 注解，如果验证失败，它将抛出 MethodArgumentNotValidException。默认情况下，Spring 会将此异常转换为 HTTP Status 400（错误请求）。

```java
@RestController
@RequestMapping("/api")
public class PersonController {

    @PostMapping("/person")
    public ResponseEntity<Person> getPerson(@RequestBody @Valid Person person) {
        return ResponseEntity.ok().body(person);
    }
}
```

#### 15.3 验证请求参数(Path Variables 和 Request Parameters) 

一定一定不要忘记在类上加上 Validated 注解了，这个参数可以告诉 Spring 去校验方法参数。

```java
@RestController
@RequestMapping("/api")
@Validated
public class PersonController {

    @GetMapping("/person/{id}")
    public ResponseEntity<Integer> getPersonByID(@Valid @PathVariable("id") @Max(value = 5,message = "超过 id 的范围了") Integer id) {
        return ResponseEntity.ok().body(id);
    }

    @PutMapping("/person")
    public ResponseEntity<String> getPersonByName(@Valid @RequestParam("name") @Size(max = 6,message = "超过 name 的范围了") String name) {
        return ResponseEntity.ok().body(name);
    }
}
```

更多内容请参考： [如何在 Spring/Spring Boot 中做参数校验？你需要了解的都在这里！](https://javaguide.cn/system-design/framework/spring/spring-common-annotations.html)

### 16、如何使用 Spring Boot 实现全局异常处理？ 

可以使用 @ControllerAdvice 和 @ExceptionHandler 处理全局异常。

更多内容请参考我的原创 ：[Spring Boot 异常处理在实际项目中的应用](https://snailclimb.gitee.io/springboot-guide/#/./docs/advanced/springboot-handle-exception-plus)

### 17、Spring Boot 中如何实现定时任务 ? 

我们使用 @Scheduled 注解就能很方便地创建一个定时任务。

```java
@Component
public class ScheduledTasks {
    private static final Logger log = LoggerFactory.getLogger(ScheduledTasks.class);
    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

    /**
     * fixedRate：固定速率执行。每5秒执行一次。
     */
    @Scheduled(fixedRate = 5000)
    public void reportCurrentTimeWithFixedRate() {
        log.info("Current Thread : {}", Thread.currentThread().getName());
        log.info("Fixed Rate Task : The time is now {}", dateFormat.format(new Date()));
    }
}
```

单纯依靠 @Scheduled 注解还不行，我们还需要在 SpringBoot 中我们只需要在启动类上加上@EnableScheduling 注解，这样才可以启动定时任务。@EnableScheduling 注解的作用是发现注解 @Scheduled 的任务并在后台执行该任务。

### 18、Spring、Spring MVC和 Spring Boot 有什么区别？

- Spring

Spring 最重要的特征是依赖注入。所有 Spring Modules 不是依赖注入就是 IOC 控制反转。当我们恰当的使用 DI 或者是 IOC 的时候，可以开发松耦合应用。

- Spring MVC

Spring MVC 提供了一种分离式的方法来开发 Web 应用。通过运用像 DispatcherServelet，ModelAndView 和 ViewResolver 等一些简单的概念，开发 Web 应用将会变的非常简单。

- Spring Boot

Spring 和Spring MVC 的问题在于需要配置大量的参数。

Spring Boot 通过一个自动配置和启动的项来解决这个问题。

### 19、Spring Boot 的核心配置文件有哪几个？他们的区别是什么？

Spring Boot的核心配置文件是 application 和 bootstrap 配置文件。

application 配置文件这个容易理解，主要用于 Spring Boot 项目的自动化配置。

bootstrap 配置文件有以下几个应用场景：

- 使用 Spring Cloud Config 配置中心时，这时需要在 bootstrap 配置文件中添加连接到配置中心的配置属性来加载外部配置中心的配置信息；
- 一些固定的不能被覆盖的属性；
- 一些加密/解密的场景；

### 20、spring-boot-starter-parent 有什么作用？

我们知道，新建一个 Spring Boot 项目，默认都是有 parent 的，这个 parent 就是 spring-boot-starter-parent，spring-boot-starter-parent 主要有如下作用：

- 定义了 Java 编译版本
- 使用 UTF-8 格式编码
- 继承自spring-boot-dependencies，这里面定义了依赖的版本，也正是因为继承了这个依赖，所以我们在写依赖时才不需要写版本号
- 执行打包操作的配置
- 自动化的资源过滤
- 自动化的插件配置

### 21、如何自定义Spring Boot Starter？

- 实现功能
- 添加Properties

```java
@Data
@ConfigurationProperties(prefix = "com.pdai")
public class DemoProperties {
    private String version;
    private String name;
}
```

- 添加AutoConfiguration

```java
@Configuration
@EnableConfigurationProperties(DemoProperties.class)
public class DemoAutoConfiguration {

    @Bean
    public com.pdai.demo.module.DemoModule demoModule(DemoProperties properties){
        com.pdai.demo.module.DemoModule demoModule = new com.pdai.demo.module.DemoModule();
        demoModule.setName(properties.getName());
        demoModule.setVersion(properties.getVersion());
        return demoModule;
    }
}  
```

- 添加spring.factory

在META-INF下创建spring.factory文件

```bash
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
com.pdai.demospringbootstarter.DemoAutoConfiguration
```

- install

![img](https://qiniu.dyl.fit/Interview/springboot-starter-demo-2.png)

### 22、为什么需要spring-boot-maven-plugin？

spring-boot-maven-plugin提供了一些像jar一样打包或者运行应用程序的命令。

1. spring-boot:run 运行SpringBoot应用程序；
2. spring-boot:repackage 重新打包你的jar包或者是war包使其可执行
3. spring-boot:start和spring-boot:stop管理Spring Boot应用程序的生命周期
4. spring-boot:build-info生成执行器可以使用的构造信息

### 23、SpringBoot 打成jar和普通的jar有什么区别？

Spring Boot 项目最终打包成的 jar 是可执行 jar ，这种 jar 可以直接通过java -jar xxx.jar命令来运行，这种 jar 不可以作为普通的 jar 被其他项目依赖，即使依赖了也无法使用其中的类。

Spring Boot 的 jar 无法被其他项目依赖，主要还是他和普通 jar 的结构不同。普通的 jar 包，解压后直接就是包名，包里就是我们的代码，而 Spring Boot 打包成的可执行 jar 解压后，在 \BOOT-INF\classes目录下才是我们的代码，因此无法被直接引用。如果非要引用，可以在 pom.xml 文件中增加配置，将 Spring Boot 项目打包成两个 jar ，一个可执行，一个可引用。

### 24、SpringBoot 实现热部署有哪几种方式？

主要有两种方式：

- Spring Loaded
- Spring-boot-devtools

### 25、Spring Boot中的监视器是什么？

Spring boot actuator是 Spring 启动框架中的重要功能之一。Spring boot监视器可帮助您访问生产环境中正在运行的应用程序的当前状态。

有几个指标必须在生产环境中进行检查和监控。即使一些外部应用程序可能正在使用这些服务来向相关人员触发警报消息。监视器模块公开了一组可直接作为HTTP URL访问的REST端点来检查状态。

### 26、Spring Boot 自动装配原理

每次问到 Spring Boot， 面试官非常喜欢问这个问题：“讲述一下 SpringBoot 自动装配原理？”。

我觉得我们可以从以下几个方面回答：

1. 什么是 SpringBoot 自动装配？
2. Spring Boot 是如何实现自动装配的？如何实现按需加载？
3. 如何实现一个 Starter？

#### 什么是 SpringBoot 自动装配？

我们现在提到自动装配的时候，一般会和 Spring Boot 联系在一起。但是，实际上 Spring Framework 早就实现了这个功能。Spring Boot 只是在其基础上，通过 SPI 的方式，做了进一步优化。

> SpringBoot 定义了一套接口规范，这套规范规定：SpringBoot 在启动时会扫描外部引用 jar 包中的`META-INF/spring.factories`文件，将文件中配置的类型信息加载到 Spring 容器（此处涉及到 JVM 类加载机制与 Spring 的容器知识），并执行类中定义的各种操作。对于外部 jar 来说，只需要按照 SpringBoot 定义的标准，就能将自己的功能装置进 SpringBoot。

没有 Spring Boot 的情况下，如果我们需要引入第三方依赖，需要手动配置，非常麻烦。但是，Spring Boot 中，我们直接引入一个 starter 即可。比如你想要在项目中使用 redis 的话，直接在项目中引入对应的 starter 即可。

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

引入 starter 之后，我们通过少量注解和一些简单的配置就能使用第三方组件提供的功能了。

自动装配可以简单理解为：**通过注解或者一些简单的配置就能在 Spring Boot 的帮助下实现某块功能。**

#### SpringBoot 是如何实现自动装配的？

我们先看一下 SpringBoot 的核心注解 `SpringBootApplication` 。

```java
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@SpringBootConfiguration
@ComponentScan
@EnableAutoConfiguration
public @interface SpringBootApplication {

}

@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Configuration //实际上它也是一个配置类
public @interface SpringBootConfiguration {
}
```

大概可以把 `@SpringBootApplication`看作是 `@Configuration`、`@EnableAutoConfiguration`、`@ComponentScan` 注解的集合。根据SpringBoot 官网，这三个注解的作用分别是：

- `@EnableAutoConfiguration`：启用 SpringBoot 的自动配置机制
- `@Configuration`：允许在上下文中注册额外的 bean 或导入其他配置类
- `@ComponentScan`： 扫描被`@Component` (`@Service`,`@Controller`)注解的 bean，注解默认会扫描启动类所在的包下所有的类 ，可以自定义不扫描某些 bean。如下图所示，容器中将排除`TypeExcludeFilter`和`AutoConfigurationExcludeFilter`。

![img](https://qiniu.dyl.fit/Interview/bcc73490afbe4c6ba62acde6a94ffdfd~tplv-k3u1fbpfcp-watermark.image)

`@EnableAutoConfiguration` 是实现自动装配的重要注解，我们以这个注解入手。

##### @EnableAutoConfiguration:实现自动装配的核心注解

`EnableAutoConfiguration` 只是一个简单地注解，自动装配核心功能的实现实际是通过 `AutoConfigurationImportSelector` 类。

```java
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@AutoConfigurationPackage //作用：将main包下的所有组件注册到容器中
@Import({AutoConfigurationImportSelector.class}) //加载自动装配类 xxxAutoconfiguration
public @interface EnableAutoConfiguration {
    String ENABLED_OVERRIDE_PROPERTY = "spring.boot.enableautoconfiguration";

    Class<?>[] exclude() default {};

    String[] excludeName() default {};
}
```

我们现在重点分析下`AutoConfigurationImportSelector` 类到底做了什么？

##### AutoConfigurationImportSelector:加载自动装配类

`AutoConfigurationImportSelector`类的继承体系如下：

```java
public class AutoConfigurationImportSelector implements DeferredImportSelector, BeanClassLoaderAware, ResourceLoaderAware, BeanFactoryAware, EnvironmentAware, Ordered {

}

public interface DeferredImportSelector extends ImportSelector {

}

public interface ImportSelector {
    String[] selectImports(AnnotationMetadata var1);
}
```

可以看出，`AutoConfigurationImportSelector` 类实现了 `ImportSelector`接口，也就实现了这个接口中的 `selectImports`方法，该方法主要用于**获取所有符合条件的类的全限定类名，这些类需要被加载到 IoC 容器中**。

```java
private static final String[] NO_IMPORTS = new String[0];

public String[] selectImports(AnnotationMetadata annotationMetadata) {
        // <1>.判断自动装配开关是否打开
        if (!this.isEnabled(annotationMetadata)) {
            return NO_IMPORTS;
        } else {
          //<2>.获取所有需要装配的bean
            AutoConfigurationMetadata autoConfigurationMetadata = AutoConfigurationMetadataLoader.loadMetadata(this.beanClassLoader);
            AutoConfigurationImportSelector.AutoConfigurationEntry autoConfigurationEntry = this.getAutoConfigurationEntry(autoConfigurationMetadata, annotationMetadata);
            return StringUtils.toStringArray(autoConfigurationEntry.getConfigurations());
        }
    }
```

这里我们需要重点关注一下`getAutoConfigurationEntry()`方法，这个方法主要负责加载自动配置类的。

该方法调用链如下：

![img](https://qiniu.dyl.fit/Interview/tplv-k3u1fbpfcp-watermark.image)

现在我们结合`getAutoConfigurationEntry()`的源码来详细分析一下：

```java
private static final AutoConfigurationEntry EMPTY_ENTRY = new AutoConfigurationEntry();

AutoConfigurationEntry getAutoConfigurationEntry(AutoConfigurationMetadata autoConfigurationMetadata, AnnotationMetadata annotationMetadata) {
        //<1>.
        if (!this.isEnabled(annotationMetadata)) {
            return EMPTY_ENTRY;
        } else {
            //<2>.
            AnnotationAttributes attributes = this.getAttributes(annotationMetadata);
            //<3>.
            List<String> configurations = this.getCandidateConfigurations(annotationMetadata, attributes);
            //<4>.
            configurations = this.removeDuplicates(configurations);
            Set<String> exclusions = this.getExclusions(annotationMetadata, attributes);
            this.checkExcludedClasses(configurations, exclusions);
            configurations.removeAll(exclusions);
            configurations = this.filter(configurations, autoConfigurationMetadata);
            this.fireAutoConfigurationImportEvents(configurations, exclusions);
            return new AutoConfigurationImportSelector.AutoConfigurationEntry(configurations, exclusions);
        }
    }
```

**第 1 步**:

判断自动装配开关是否打开。默认`spring.boot.enableautoconfiguration=true`，可在 `application.properties` 或 `application.yml` 中设置

![img](https://qiniu.dyl.fit/Interview/77aa6a3727ea4392870f5cccd09844ab~tplv-k3u1fbpfcp-watermark.image)

**第 2 步** ：

用于获取`EnableAutoConfiguration`注解中的 `exclude` 和 `excludeName`。

![img](https://qiniu.dyl.fit/Interview/3d6ec93bbda1453aa08c52b49516c05a~tplv-k3u1fbpfcp-zoom-1.image)

**第 3 步**

获取需要自动装配的所有配置类，读取`META-INF/spring.factories`

```text
spring-boot/spring-boot-project/spring-boot-autoconfigure/src/main/resources/META-INF/spring.factories
```

![img](https://qiniu.dyl.fit/Interview/58c51920efea4757aa1ec29c6d5f9e36.image)

从下图可以看到这个文件的配置内容都被我们读取到了。`XXXAutoConfiguration`的作用就是按需加载组件。

![img](https://qiniu.dyl.fit/Interview/94d6e1a060ac41db97043e1758789026.image)

不光是这个依赖下的`META-INF/spring.factories`被读取到，所有 Spring Boot Starter 下的`META-INF/spring.factories`都会被读取到。

所以，你可以清楚滴看到， druid 数据库连接池的 Spring Boot Starter 就创建了`META-INF/spring.factories`文件。

如果，我们自己要创建一个 Spring Boot Starter，这一步是必不可少的。

![img](https://qiniu.dyl.fit/Interview/68fa66aeee474b0385f94d23bcfe1745.image)

**第 4 步** ：

到这里可能面试官会问你:“`spring.factories`中这么多配置，每次启动都要全部加载么？”。

很明显，这是不现实的。我们 debug 到后面你会发现，`configurations` 的值变小了。

![img](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/267f8231ae2e48d982154140af6437b0~tplv-k3u1fbpfcp-watermark.image)

因为，这一步有经历了一遍筛选，`@ConditionalOnXXX` 中的所有条件都满足，该类才会生效。

```java
@Configuration
// 检查相关的类：RabbitTemplate 和 Channel是否存在
// 存在才会加载
@ConditionalOnClass({ RabbitTemplate.class, Channel.class })
@EnableConfigurationProperties(RabbitProperties.class)
@Import(RabbitAnnotationDrivenConfiguration.class)
public class RabbitAutoConfiguration {
}
```

有兴趣的童鞋可以详细了解下 Spring Boot 提供的条件注解

- `@ConditionalOnBean`：当容器里有指定 Bean 的条件下
- `@ConditionalOnMissingBean`：当容器里没有指定 Bean 的情况下
- `@ConditionalOnSingleCandidate`：当指定 Bean 在容器中只有一个，或者虽然有多个但是指定首选 Bean
- `@ConditionalOnClass`：当类路径下有指定类的条件下
- `@ConditionalOnMissingClass`：当类路径下没有指定类的条件下
- `@ConditionalOnProperty`：指定的属性是否有指定的值
- `@ConditionalOnResource`：类路径是否有指定的值
- `@ConditionalOnExpression`：基于 SpEL 表达式作为判断条件
- `@ConditionalOnJava`：基于 Java 版本作为判断条件
- `@ConditionalOnJndi`：在 JNDI 存在的条件下差在指定的位置
- `@ConditionalOnNotWebApplication`：当前项目不是 Web 项目的条件下
- `@ConditionalOnWebApplication`：当前项目是 Web 项 目的条件下

#### 如何实现一个 Starter

光说不练假把式，现在就来撸一个 starter，实现自定义线程池

第一步，创建`threadpool-spring-boot-starter`工程

![img](https://qiniu.dyl.fit/Interview/1ff0ebe7844f40289eb60213af72c5a6~tplv-k3u1fbpfcp-watermark.image)

第二步，引入 Spring Boot 相关依赖

![img](https://qiniu.dyl.fit/Interview/5e14254276604f87b261e5a80a354cc0~tplv-k3u1fbpfcp-watermark.image)

第三步，创建`ThreadPoolAutoConfiguration`

![img](https://qiniu.dyl.fit/Interview/1843f1d12c5649fba85fd7b4e4a59e39~tplv-k3u1fbpfcp-watermark.image)

第四步，在`threadpool-spring-boot-starter`工程的 resources 包下创建`META-INF/spring.factories`文件

![img](https://qiniu.dyl.fit/Interview/97b738321f1542ea8140484d6aaf0728~tplv-k3u1fbpfcp-watermark.image)

最后新建工程引入`threadpool-spring-boot-starter`

![img](https://qiniu.dyl.fit/Interview/edcdd8595a024aba85b6bb20d0e3fed4~tplv-k3u1fbpfcp-watermark.image)

测试通过！！！

![img](https://qiniu.dyl.fit/Interview/9a265eea4de742a6bbdbbaa75f437307.image)

#### 总结图

![image-20221004204652195](https://qiniu.dyl.fit/Interview/image-20221004204652195.png)
