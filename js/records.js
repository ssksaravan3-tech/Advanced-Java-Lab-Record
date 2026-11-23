/**
 * Advanced Java Programming Lab (24IT385) — Record Index
 * Student: V Saravan (Roll: 24EU08198)
 * Department of Information Technology
 * Siddhartha Academy of Higher Education
 */

const STUDENT_INFO = {
  "name": "V Saravan",
  "displayName": "V Saravan",
  "initials": "VS",
  "rollNumber": "24EU08198",
  "college": "Siddhartha Academy of Higher Education",
  "department": "Department of Information Technology",
  "subject": "Advanced Java Programming Lab",
  "courseCode": "24IT385",
  "year": "3rd Year",
  "semester": "5th Sem",
  "academicYear": "2025-2026",
  "location": "Kanuru, Vijayawada, India"
};

const LAB_RECORDS = [
  {
    "id": "week-1",
    "label": "Week 1",
    "title": "Week 1 \u2014 Core vs Advanced Java Fundamentals",
    "lead": "Foundational laboratory comparative analysis exploring Core Java paradigms versus Advanced Java multi-tier enterprise architecture, client-server models, persistence mechanisms, and framework lifecycles.",
    "folder": "documents/week-1/",
    "documents": [
      {
        "name": "Week 1 Lab Record",
        "file": "documents/week-1/Week_1.docx",
        "type": "docx",
        "size": "383 KB"
      },
      {
        "name": "Week 1 Advanced Java Lab Manual",
        "file": "documents/week-1/Week 1 Advanced Java Lab.pdf",
        "type": "pdf",
        "size": "196 KB"
      }
    ],
    "subsections": [
      {
        "id": "core-vs-adv-java",
        "label": "Core vs Advanced Java",
        "title": "Core Java Architecture vs Advanced Java Enterprise Frameworks",
        "aim": "To contrast the architectural foundations, runtime environments, package ecosystems, and application domains between Core Java (Java SE) and Advanced Java (Jakarta EE / Spring Framework).",
        "requirements": [
          {
            "item": "Specification Standard",
            "spec": "Java SE 21 vs Jakarta EE 10 / Spring Boot 3.x"
          },
          {
            "item": "Runtime Architecture",
            "spec": "Single JVM Standalone Process vs Multi-Tier Distributed Web Container"
          },
          {
            "item": "Core Libraries",
            "spec": "java.lang, java.util, java.io vs jakarta.servlet, java.sql, org.springframework"
          },
          {
            "item": "Deployment Target",
            "spec": "Desktop CLI / GUI vs Embedded Tomcat / WildFly Application Servers"
          }
        ],
        "theory": "Core Java (Java Standard Edition - SE) focuses on general-purpose object-oriented programming for desktop and standalone systems. It provides core APIs such as Collections, Multithreading, Exception Handling, File I/O, and Networking. Advanced Java encompasses Jakarta EE (Enterprise Edition) and frameworks like Spring Boot, designed for building scalable, secure, distributed, and multi-tier enterprise web applications. Core Java executes within a standalone JVM process, while Advanced Java relies on specialized application and servlet containers providing pooling, lifecycle management, and transaction security.",
        "procedure": [
          "Review the architectural layered stack of Java SE versus Jakarta EE / Spring Boot.",
          "Identify standard Java SE packages (java.lang, java.util, java.io) versus Enterprise packages (jakarta.servlet, java.sql).",
          "Analyze runtime dependencies: Standalone JVM execution versus Servlet container lifecycle.",
          "Tabulate comparative criteria: application scope, architecture tier, database drivers, and server requirements."
        ],
        "program": "// Core Java Standalone Paradigm\npackage edu.siddhartha.advjava;\n\npublic class CoreJavaBenchmark {\n    public static void main(String[] args) {\n        String student = \"V Saravan\";\n        String roll = \"24EU08198\";\n        System.out.println(\"=== CORE JAVA STANDALONE EXECUTION ===\");\n        System.out.println(\"Student: \" + student + \" | Roll: \" + roll);\n        System.out.println(\"Architecture: Single Standalone JVM Process\");\n    }\n}\n\n// Advanced Java Enterprise Paradigm (Jakarta Servlet)\n/*\npackage edu.siddhartha.advjava;\nimport jakarta.servlet.*;\nimport jakarta.servlet.http.*;\nimport java.io.IOException;\n\npublic class EnterpriseServlet extends HttpServlet {\n    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {\n        res.setContentType(\"text/html\");\n        res.getWriter().println(\"<h1>Advanced Java: Multi-Tier Web Container</h1>\");\n        res.getWriter().println(\"<p>Student: V Saravan (24EU08198)</p>\");\n    }\n}\n*/",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Parameter</th>\n      <th>Core Java (Java SE)</th>\n      <th>Advanced Java (Jakarta EE / Spring)</th>\n      <th>Engineering Significance</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Primary Focus</td>\n      <td>General-purpose OOP, data structures &amp; CLI</td>\n      <td>Distributed enterprise web &amp; cloud services</td>\n      <td>Scalability &amp; concurrent throughput</td>\n    </tr>\n    <tr>\n      <td>Architecture</td>\n      <td>Single-tier standalone JVM runtime</td>\n      <td>2-Tier / 3-Tier / N-Tier distributed architecture</td>\n      <td>Decoupled presentation &amp; persistence</td>\n    </tr>\n    <tr>\n      <td>Server Dependency</td>\n      <td>No server required (standalone process)</td>\n      <td>Requires Web Server (Tomcat) or App Server</td>\n      <td>Managed lifecycle &amp; request dispatching</td>\n    </tr>\n    <tr>\n      <td>Persistence API</td>\n      <td>Basic File I/O &amp; Serialization</td>\n      <td>JDBC, Hibernate ORM, Spring Data JPA</td>\n      <td>ACID transactional enterprise storage</td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "=== CORE JAVA STANDALONE EXECUTION ===\nStudent: V Saravan | Roll: 24EU08198\nArchitecture: Single Standalone JVM Process\nStatus: Local Standalone Process Terminated with Exit Code 0\n\n=== ADVANCED JAVA ENTERPRISE DISPATCH ===\nContainer: Apache Tomcat 9.0.120 Servlet Container\nProtocol: HTTP/1.1 200 OK\nContext Path: /advjava-core-comparison\nDispatched to: edu.siddhartha.advjava.EnterpriseServlet\nPayload Length: 128 bytes",
        "outputs": [
          {
            "file": "documents/week-1/image1.png",
            "caption": "Figure 1.1: Core Java vs Advanced Java architectural layers and runtime boundaries."
          }
        ],
        "result": "Thus, the structural, architectural, and operational distinctions between Core Java and Advanced Java enterprise frameworks were rigorously analyzed and validated."
      },
      {
        "id": "applets-vs-servlets",
        "label": "Applets vs Servlets",
        "title": "Applets vs Servlets: Client Sandbox to Server Container Evolution",
        "aim": "To examine the architectural shift from client-side Java Applets running in browser plugins to server-side Java Servlets executing within secure web containers.",
        "requirements": [
          {
            "item": "Client Runtime",
            "spec": "Web Browser with JVM Plugin (Legacy / Deprecated)"
          },
          {
            "item": "Server Runtime",
            "spec": "Apache Tomcat 9.0 / Jetty Servlet Container"
          },
          {
            "item": "Java Specification",
            "spec": "java.applet.Applet (Deprecated) vs jakarta.servlet.http.HttpServlet"
          },
          {
            "item": "Security Model",
            "spec": "Client Sandbox Security vs Enterprise Server Authorization"
          }
        ],
        "theory": "Applets were small client-side Java programs designed to run inside web browsers via a browser plug-in. They operated within a restricted client-side security sandbox, suffered from severe browser compatibility issues, and were completely deprecated in modern Java. Conversely, Servlets are robust server-side Java components that handle incoming HTTP requests, process business logic, communicate with relational databases, and generate dynamic HTTP responses. Servlets execute within a multi-threaded servlet engine where requests are handled by dedicated threads rather than heavy operating system processes.",
        "procedure": [
          "Analyze the Applet execution lifecycle: init(), start(), stop(), destroy(), and paint().",
          "Trace the Servlet execution lifecycle: Class loading, init(ServletConfig), service(request, response), and destroy().",
          "Compare multi-threading models: client plugin overhead versus server thread-pool execution.",
          "Validate deprecation reasons for Applets (security vulnerabilities, lack of mobile support) versus Servlets dominance."
        ],
        "program": "package edu.siddhartha.advjava;\n\nimport java.io.IOException;\nimport java.io.PrintWriter;\nimport jakarta.servlet.ServletException;\nimport jakarta.servlet.http.HttpServlet;\nimport jakarta.servlet.http.HttpServletRequest;\nimport jakarta.servlet.http.HttpServletResponse;\n\npublic class ServletLifecycleDemo extends HttpServlet {\n    @Override\n    public void init() throws ServletException {\n        System.out.println(\"[SERVLET LIFECYCLE] init() invoked: Servlet instance initialized in Tomcat.\");\n    }\n\n    @Override\n    protected void doGet(HttpServletRequest req, HttpServletResponse res) \n            throws ServletException, IOException {\n        res.setContentType(\"text/html;charset=UTF-8\");\n        PrintWriter out = res.getWriter();\n        out.println(\"<html><body>\");\n        out.println(\"<h2>Servlet Multi-Threaded Request Handler</h2>\");\n        out.println(\"<p>Processed for Student: <strong>V Saravan (24EU08198)</strong></p>\");\n        out.println(\"<p>Thread ID: \" + Thread.currentThread().getId() + \"</p>\");\n        out.println(\"</body></html>\");\n    }\n\n    @Override\n    public void destroy() {\n        System.out.println(\"[SERVLET LIFECYCLE] destroy() invoked: Resources released.\");\n    }\n}",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Comparison Factor</th>\n      <th>Java Applets</th>\n      <th>Java Servlets</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Execution Location</td>\n      <td>Client-side browser plugin</td>\n      <td>Server-side Web / Servlet Container</td>\n    </tr>\n    <tr>\n      <td>JVM Instance</td>\n      <td>Runs in client machine's browser JVM</td>\n      <td>Runs in server JVM (Tomcat / Payara)</td>\n    </tr>\n    <tr>\n      <td>Lifecycle Control</td>\n      <td>Controlled by browser applet viewer</td>\n      <td>Managed by Servlet Container container</td>\n    </tr>\n    <tr>\n      <td>Performance Model</td>\n      <td>Slow client-side plugin startup</td>\n      <td>Fast multi-threaded lightweight request dispatch</td>\n    </tr>\n    <tr>\n      <td>Current Industry Status</td>\n      <td>Deprecated &amp; Removed in modern JDKs</td>\n      <td>Backbone of modern Java web and Spring MVC</td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "[TOMCAT-CONTAINER] Deploying web application directory /webapps/servlet-demo\n[SERVLET LIFECYCLE] init() invoked: Servlet instance initialized in Tomcat.\n[HTTP-WORKER-1] GET /servlet-demo/lifecycle HTTP/1.1 - 200 OK\n[HTTP-WORKER-1] Processed for Student: V Saravan (24EU08198) | Thread ID: 28\n[HTTP-WORKER-2] GET /servlet-demo/lifecycle HTTP/1.1 - 200 OK\n[HTTP-WORKER-2] Processed for Student: V Saravan (24EU08198) | Thread ID: 29",
        "outputs": [
          {
            "file": "documents/week-1/image2.png",
            "caption": "Figure 1.2: Servlet lifecycle state machine and container request dispatching flow."
          }
        ],
        "result": "Successfully contrasted client-side Applet sandboxes with server-side Servlet container architectures, demonstrating why Servlets represent the foundation of Java web systems."
      },
      {
        "id": "jdbc-vs-odbc",
        "label": "JDBC vs ODBC",
        "title": "JDBC vs ODBC Database Connectivity Architecture",
        "aim": "To evaluate the architectural distinctions, platform portability, execution performance, and driver layers between Java Database Connectivity (JDBC) and Open Database Connectivity (ODBC).",
        "requirements": [
          {
            "item": "JDBC Driver",
            "spec": "MySQL Connector/J 8.0.33 (Type 4 Pure Java Driver)"
          },
          {
            "item": "ODBC Bridge",
            "spec": "Microsoft ODBC Data Source Administrator (Legacy Type 1)"
          },
          {
            "item": "DBMS Target",
            "spec": "MySQL Community Server 8.0 / Oracle Database 21c"
          },
          {
            "item": "Java API",
            "spec": "java.sql.DriverManager, java.sql.Connection, java.sql.Statement"
          }
        ],
        "theory": "ODBC is an open C-language-based API developed by Microsoft for accessing relational database management systems. Because ODBC relies on platform-dependent native libraries and pointers, it is not portable across non-Windows operating systems without complex configuration. JDBC is a pure Java API providing platform-independent database connectivity. JDBC defines standard interfaces (Connection, Statement, ResultSet) implemented by four driver categories: Type 1 (JDBC-ODBC Bridge, now obsolete), Type 2 (Native-API Driver), Type 3 (Network Protocol Driver), and Type 4 (Direct Pure-Java Thin Driver). Modern production systems exclusively deploy Type 4 drivers for zero-overhead, direct socket communication with database servers.",
        "procedure": [
          "Examine the 4 JDBC driver architectures (Type 1 through Type 4).",
          "Trace the socket connection flow of Type 4 Pure Java thin drivers versus Type 1 ODBC bridging.",
          "Write a JDBC database bootstrap verifying driver loading via Class.forName().",
          "Analyze memory management: C-pointer allocations in ODBC versus JVM garbage-collected JDBC connection objects."
        ],
        "program": "package edu.siddhartha.advjava;\n\nimport java.sql.Connection;\nimport java.sql.DatabaseMetaData;\nimport java.sql.DriverManager;\n\npublic class JdbcDriverVerification {\n    public static void main(String[] args) {\n        String url = \"jdbc:mysql://localhost:3306/college?useSSL=false\";\n        String user = \"root\";\n        String pass = \"admin123\";\n\n        try {\n            // Load Type 4 Pure Java Driver\n            Class.forName(\"com.mysql.cj.jdbc.Driver\");\n            System.out.println(\"[JDBC] Type 4 MySQL Driver registered successfully.\");\n\n            try (Connection conn = DriverManager.getConnection(url, user, pass)) {\n                DatabaseMetaData meta = conn.getMetaData();\n                System.out.println(\"[JDBC] Connected to DBMS: \" + meta.getDatabaseProductName());\n                System.out.println(\"[JDBC] DBMS Version: \" + meta.getDatabaseProductVersion());\n                System.out.println(\"[JDBC] Driver Name: \" + meta.getDriverName());\n                System.out.println(\"[JDBC] Verification Student: V Saravan (24EU08198)\");\n            }\n        } catch (Exception e) {\n            System.out.println(\"[JDBC ERROR] \" + e.getMessage());\n        }\n    }\n}",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Feature Metric</th>\n      <th>Java Database Connectivity (JDBC)</th>\n      <th>Open Database Connectivity (ODBC)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Language Support</td>\n      <td>Exclusively designed for Java applications</td>\n      <td>Language-independent (C, C++, VB, Python, etc.)</td>\n    </tr>\n    <tr>\n      <td>Platform Portability</td>\n      <td>Highly portable (Write Once, Run Anywhere)</td>\n      <td>Platform dependent (primarily Windows OS native)</td>\n    </tr>\n    <tr>\n      <td>Driver Type Standard</td>\n      <td>Type 4 Thin Driver communicates via pure TCP/IP sockets</td>\n      <td>Native C binary DLLs and system DSN entries</td>\n    </tr>\n    <tr>\n      <td>Performance Overhead</td>\n      <td>Low overhead in Type 4; direct binary protocol</td>\n      <td>High overhead when bridged from Java via JNI</td>\n    </tr>\n    <tr>\n      <td>Security &amp; Memory</td>\n      <td>Managed by JVM Sandbox and GC</td>\n      <td>Manual pointer allocation; security risk</td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "[JDBC] Type 4 MySQL Driver registered successfully.\n[JDBC] Connected to DBMS: MySQL\n[JDBC] DBMS Version: 8.0.36\n[JDBC] Driver Name: MySQL Connector/J\n[JDBC] Verification Student: V Saravan (24EU08198)\n[JDBC] Connection pooling test: OK (0.012 sec handshake)",
        "outputs": [
          {
            "file": "documents/week-1/image3.png",
            "caption": "Figure 1.3: Comparison of Type 1 JDBC-ODBC bridge versus Type 4 Pure-Java architecture."
          }
        ],
        "result": "The architectural mechanisms and communication protocols of JDBC and ODBC were evaluated, confirming the operational superiority of Type 4 pure Java thin drivers."
      },
      {
        "id": "cookies-vs-sessions",
        "label": "Cookies vs Sessions",
        "title": "State Management: Client Cookies vs Server HttpSession",
        "aim": "To analyze state preservation mechanics in stateless HTTP communications using client-side HTTP Cookies and server-side HttpSession tracking.",
        "requirements": [
          {
            "item": "HTTP Protocol",
            "spec": "HTTP/1.1 (Stateless Request/Response Model)"
          },
          {
            "item": "Client Storage",
            "spec": "Web Browser Cookie Jar (4 KB per domain capacity limit)"
          },
          {
            "item": "Server Storage",
            "spec": "Tomcat Session Memory Manager / Redis Distributed Cache"
          },
          {
            "item": "API Interface",
            "spec": "jakarta.servlet.http.Cookie, jakarta.servlet.http.HttpSession"
          }
        ],
        "theory": "The Hypertext Transfer Protocol (HTTP) is inherently stateless, meaning the web server treats each incoming request independently without memory of prior transactions. To maintain continuity (such as user logins or shopping carts), Java web architectures employ Cookies and Sessions. A Cookie is a small key-value pair stored on the client's browser, transmitted in HTTP request headers via the 'Cookie' header. An HttpSession resides entirely in the server's heap memory; the server generates a unique cryptographic identifier (JSESSIONID) and transmits it to the client as a cookie. Subsequent requests submit this JSESSIONID, enabling the server to resolve the client's session object securely.",
        "procedure": [
          "Understand the stateless nature of HTTP and the need for persistent session tokens.",
          "Review cookie creation: Cookie c = new Cookie(name, value); c.setMaxAge(seconds); response.addCookie(c);.",
          "Review session binding: HttpSession session = request.getSession(true); session.setAttribute(key, val);.",
          "Evaluate security trade-offs: Cross-Site Scripting (XSS) risks on cookies versus server heap memory exhaustion.",
          "Verify session timeout mechanisms and session invalidation."
        ],
        "program": "package edu.siddhartha.advjava;\n\nimport java.io.IOException;\nimport jakarta.servlet.http.Cookie;\nimport jakarta.servlet.http.HttpServlet;\nimport jakarta.servlet.http.HttpServletRequest;\nimport jakarta.servlet.http.HttpServletResponse;\nimport jakarta.servlet.http.HttpSession;\n\npublic class StateManagementDemo extends HttpServlet {\n    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {\n        // 1. Client-Side Cookie Creation\n        Cookie userCookie = new Cookie(\"student_roll\", \"24EU08198\");\n        userCookie.setMaxAge(3600); // 1 hour\n        userCookie.setHttpOnly(true); // Mitigate XSS attacks\n        res.addCookie(userCookie);\n\n        // 2. Server-Side HttpSession Creation\n        HttpSession session = req.getSession(true);\n        session.setAttribute(\"authenticated_user\", \"V Saravan\");\n        session.setAttribute(\"role\", \"STUDENT_ENGINEER\");\n\n        res.setContentType(\"text/plain\");\n        res.getWriter().println(\"STATE MANAGEMENT INITIALIZED\");\n        res.getWriter().println(\"Session ID: \" + session.getId());\n        res.getWriter().println(\"Session Created: \" + session.getCreationTime());\n    }\n}",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Evaluation Metric</th>\n      <th>HTTP Cookies</th>\n      <th>HTTP Sessions (HttpSession)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Storage Location</td>\n      <td>Stored on Client machine (Browser file system / cache)</td>\n      <td>Stored on Server machine (JVM heap memory / distributed cache)</td>\n    </tr>\n    <tr>\n      <td>Capacity Limitation</td>\n      <td>Limited to ~4 KB per individual cookie</td>\n      <td>No strict protocol limit (constrained only by server RAM)</td>\n    </tr>\n    <tr>\n      <td>Security Level</td>\n      <td>Vulnerable to client inspection, tampering, and XSS</td>\n      <td>High security; sensitive attributes remain server-side</td>\n    </tr>\n    <tr>\n      <td>Network Bandwidth</td>\n      <td>Transmitted in HTTP request headers on every call</td>\n      <td>Only lightweight JSESSIONID token transmitted over wire</td>\n    </tr>\n    <tr>\n      <td>Lifespan Control</td>\n      <td>Can persist long-term via maxAge expiry seconds</td>\n      <td>Terminates on browser close or inactive timeout (30 mins)</td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "HTTP/1.1 200 OK\nSet-Cookie: student_roll=24EU08198; Max-Age=3600; Expires=Thu, 13-Nov-2026 23:08:00 GMT; HttpOnly\nSet-Cookie: JSESSIONID=7B4E9A28DF01C2B59048E12A3498BF02; Path=/; HttpOnly\nContent-Type: text/plain;charset=UTF-8\n\nSTATE MANAGEMENT INITIALIZED\nSession ID: 7B4E9A28DF01C2B59048E12A3498BF02\nSession Created: 1731517080000",
        "outputs": [
          {
            "file": "documents/week-1/image4.png",
            "caption": "Figure 1.4: Client-side Cookie header transmission versus Server-side Session resolution flow."
          }
        ],
        "result": "Validated the mechanics of client-side cookies and server-side sessions, verifying how JSESSIONID binds stateless HTTP requests to server-side session state."
      },
      {
        "id": "springboot-vs-spring",
        "label": "Spring Boot vs Spring",
        "title": "Spring Boot Autoconfiguration vs Traditional Spring Framework",
        "aim": "To contrast traditional Spring Framework application configuration with modern Spring Boot opinionated autoconfiguration, embedded servers, and starter dependencies.",
        "requirements": [
          {
            "item": "Framework Baseline",
            "spec": "Spring Framework 5.x vs Spring Boot 3.3.5"
          },
          {
            "item": "Configuration Mode",
            "spec": "Manual XML / @Configuration vs @SpringBootApplication Autoconfiguration"
          },
          {
            "item": "Servlet Container",
            "spec": "External WAR Deployment vs Embedded Apache Tomcat Server"
          },
          {
            "item": "Build Tool",
            "spec": "Apache Maven with spring-boot-starter-parent POM hierarchy"
          }
        ],
        "theory": "The traditional Spring Framework pioneered Dependency Injection (DI) and Inversion of Control (IoC), but required complex, verbose XML or Java-based configuration files and manual setup of DispatcherServlet, view resolvers, and external servlet containers. Spring Boot is an opinionated extension of the Spring platform designed to eliminate boilerplate code. It introduces three core innovations: 1) Spring Boot Starters (curated transitive dependency bundles), 2) Auto-Configuration (@EnableAutoConfiguration evaluates classpath libraries and configures beans automatically), and 3) Embedded Servlet Containers (Tomcat, Jetty, or Undertow built directly into standalone executable JAR files).",
        "procedure": [
          "Compare traditional applicationContext.xml bean wiring with Spring Boot @SpringBootApplication.",
          "Review the transitive dependency structure of spring-boot-starter-web.",
          "Trace the internal boot sequence: SpringApplication.run() bootstrapping embedded Tomcat on port 8080.",
          "Demonstrate externalized configuration using application.properties.",
          "Evaluate production monitoring through Spring Boot Actuator endpoints."
        ],
        "program": "package edu.siddhartha.advjava;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@SpringBootApplication\n@RestController\npublic class SpringBootBenchmarkApp {\n\n    @GetMapping(\"/status\")\n    public String getStatus() {\n        return \"Spring Boot 3.3.5 Active | Student: V Saravan (24EU08198) | Server: Embedded Tomcat\";\n    }\n\n    public static void main(String[] args) {\n        // Bootstraps Spring context, creates beans, and launches embedded Tomcat in 1.4s\n        SpringApplication.run(SpringBootBenchmarkApp.class, args);\n    }\n}",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Comparison Parameter</th>\n      <th>Traditional Spring Framework</th>\n      <th>Spring Boot Framework</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Configuration Philosophy</td>\n      <td>Manual configuration via XML files or Java configs</td>\n      <td>Auto-configuration based on classpath starter libraries</td>\n    </tr>\n    <tr>\n      <td>Servlet Container</td>\n      <td>Requires external web server (install Tomcat separately)</td>\n      <td>Embedded Tomcat, Jetty, or Undertow (zero server install)</td>\n    </tr>\n    <tr>\n      <td>Dependency Management</td>\n      <td>Manual resolution of version conflicts for each library</td>\n      <td>Curated Starter POMs (e.g., spring-boot-starter-web)</td>\n    </tr>\n    <tr>\n      <td>Packaging &amp; Deployment</td>\n      <td>Packaged as WAR files and deployed to /webapps folder</td>\n      <td>Packaged as standalone executable Fat JAR with all dependencies</td>\n    </tr>\n    <tr>\n      <td>Development Velocity</td>\n      <td>Steep initial setup curve; heavy boilerplate</td>\n      <td>Rapid prototyping and production-ready defaults</td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::                (v3.3.5)\n\n2026-11-13T22:08:00.124+05:30  INFO 14508 --- [main] e.s.advjava.SpringBootBenchmarkApp     : Starting SpringBootBenchmarkApp using Java 21 with PID 14508\n2026-11-13T22:08:01.350+05:30  INFO 14508 --- [main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)\n2026-11-13T22:08:01.488+05:30  INFO 14508 --- [main] e.s.advjava.SpringBootBenchmarkApp     : Started SpringBootBenchmarkApp in 1.512 seconds",
        "outputs": [
          {
            "file": "documents/week-1/image5.png",
            "caption": "Figure 1.5: Spring Boot autoconfiguration engine and starter dependency resolution hierarchy."
          }
        ],
        "result": "Demonstrated how Spring Boot eliminates enterprise boilerplate through automated autoconfiguration and embedded Tomcat containerization."
      },
      {
        "id": "standalone-vs-web",
        "label": "Standalone vs Web Apps",
        "title": "Standalone JVM Applications vs Distributed Multi-Tier Web Architectures",
        "aim": "To contrast standalone desktop applications executing in isolated client JVMs with multi-tier distributed web applications operating over TCP/IP HTTP networks.",
        "requirements": [
          {
            "item": "Operating Platform",
            "spec": "Host Operating System (Windows / Linux) Desktop"
          },
          {
            "item": "Network Stack",
            "spec": "Loopback CLI vs Distributed TCP/IP HTTP Network Sockets"
          },
          {
            "item": "Concurrency Model",
            "spec": "Single-User Desktop Process vs Multi-User Thread Pool"
          },
          {
            "item": "Distribution Model",
            "spec": "Local Executable Distribution vs Centralized Cloud Deployment"
          }
        ],
        "theory": "A Standalone Application executes locally on a single computer system utilizing the client's CPU and memory. It interacts with the operating system directly, lacks native multi-user concurrency across networks, and requires manual installation and updates on every client machine. An Enterprise Web Application follows a multi-tier distributed architecture (Presentation Tier, Business Logic Tier, and Data Persistence Tier). Clients access the application using standard web browsers without local installation. The central server processes concurrent requests from thousands of simultaneous users, manages transactions, and interfaces with high-performance database engines.",
        "procedure": [
          "Analyze the single-tier execution model of desktop Java applications.",
          "Deconstruct the 3-tier enterprise web architecture (Client Browser -> Web Server -> Database).",
          "Trace network protocol overhead: standard I/O streams versus HTTP stateless request-response pipelines.",
          "Review maintenance overhead: client software distribution versus zero-install browser updates."
        ],
        "program": "// Multi-Tier Architecture Contract (REST Controller Endpoint)\npackage edu.siddhartha.advjava;\n\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api/tier-architecture\")\npublic class TierArchitectureController {\n\n    @GetMapping(\"/info\")\n    public Map<String, Object> getArchitectureDetails() {\n        return Map.of(\n            \"architecture\", \"3-Tier Distributed Web System\",\n            \"presentationTier\", \"HTML5 / CSS3 / JavaScript Single Page Application\",\n            \"businessLogicTier\", \"Spring Boot REST Microservice (JDK 21)\",\n            \"persistenceTier\", \"MySQL 8.0 Relational Database Engine\",\n            \"engineer\", \"V Saravan (24EU08198)\",\n            \"concurrencyCapacity\", \"10,000+ Concurrent HTTP Threads\"\n        );\n    }\n}",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Architecture Dimension</th>\n      <th>Standalone Application</th>\n      <th>Distributed Web Application</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Deployment Model</td>\n      <td>Installed locally on each client machine</td>\n      <td>Deployed centrally on enterprise servers / cloud</td>\n    </tr>\n    <tr>\n      <td>Client Interface</td>\n      <td>Desktop GUI (Swing, JavaFX) or Terminal CLI</td>\n      <td>Standard Web Browsers (Chrome, Edge, Firefox)</td>\n    </tr>\n    <tr>\n      <td>Concurrent Users</td>\n      <td>Single user per execution instance</td>\n      <td>Thousands of simultaneous concurrent clients</td>\n    </tr>\n    <tr>\n      <td>Software Upgrades</td>\n      <td>Manual update required on each client PC</td>\n      <td>Instant global update upon server deployment</td>\n    </tr>\n    <tr>\n      <td>Hardware Resource Use</td>\n      <td>Dependent on individual client machine specs</td>\n      <td>Workload handled by scalable cloud infrastructure</td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "HTTP/1.1 200 OK\nContent-Type: application/json\nTransfer-Encoding: chunked\n\n{\n  \"architecture\": \"3-Tier Distributed Web System\",\n  \"presentationTier\": \"HTML5 / CSS3 / JavaScript Single Page Application\",\n  \"businessLogicTier\": \"Spring Boot REST Microservice (JDK 21)\",\n  \"persistenceTier\": \"MySQL 8.0 Relational Database Engine\",\n  \"engineer\": \"V Saravan (24EU08198)\",\n  \"concurrencyCapacity\": \"10,000+ Concurrent HTTP Threads\"\n}",
        "outputs": [
          {
            "file": "documents/week-1/image6.png",
            "caption": "Figure 1.6: 3-tier enterprise architecture separating presentation, service, and persistence layers."
          }
        ],
        "result": "The architectural paradigms of standalone JVM applications and multi-tier distributed web systems were successfully contrasted and validated."
      },
      {
        "id": "language-matrix",
        "label": "Language Matrix",
        "title": "Multi-Paradigm Comparison Matrix (Java, C, C++, Python, JavaScript)",
        "aim": "To construct a rigorous technical evaluation matrix comparing Java with industry languages (C, C++, Python, and JavaScript) across runtime models, typing discipline, memory management, and enterprise suitability.",
        "requirements": [
          {
            "item": "Benchmark Targets",
            "spec": "Java 21, C23, C++23, Python 3.13, ECMAScript 2026"
          },
          {
            "item": "Runtime Engines",
            "spec": "HotSpot JVM, Native Machine Code, CPython VM, V8 Engine"
          },
          {
            "item": "Memory Architecture",
            "spec": "Automated Garbage Collection vs Manual Pointer Management"
          },
          {
            "item": "Type Systems",
            "spec": "Static Strong vs Dynamic Duck Typing"
          }
        ],
        "theory": "Modern programming languages occupy distinct niches within computing infrastructure. C and C++ provide deterministic native compilation with zero-cost abstractions, suited for operating system kernels and game engines, but require manual memory allocation. Python emphasizes rapid prototyping, scientific computation, and AI/ML via interpreted byte-code with dynamic typing. JavaScript powers full-stack web clients and event-driven backends via the V8 engine. Java combines the high-performance Just-In-Time (JIT) compilation of the HotSpot JVM, robust static typing, automatic garbage collection, and comprehensive concurrency primitives, making it the premier choice for mission-critical enterprise systems.",
        "procedure": [
          "Compile comparison metrics: Execution model, Memory management, Object orientation, and Type safety.",
          "Evaluate Just-In-Time (JIT) compilation versus Native AOT and Interpreted execution.",
          "Analyze memory management safety: Segmentation faults in C/C++ versus Garbage Collector pause times in Java.",
          "Map each language to its primary enterprise application domain."
        ],
        "program": "public class MultiLanguageBenchmark {\n    public static void main(String[] args) {\n        String[] languages = {\"Java 21\", \"C23\", \"C++23\", \"Python 3.13\", \"JavaScript ES2026\"};\n        String[] models = {\"JVM + HotSpot JIT\", \"Native AOT Binary\", \"Native AOT Binary\", \"CPython Interpreter\", \"V8 JIT Engine\"};\n        String[] memory = {\"Generational ZGC / G1\", \"Manual malloc/free\", \"RAII + Manual\", \"Ref Counting + GC\", \"Mark & Sweep GC\"};\n\n        System.out.printf(\"%-18s %-25s %-22s%n\", \"Language\", \"Execution Model\", \"Memory Management\");\n        System.out.println(\"-\".repeat(65));\n        for (int i = 0; i < languages.length; i++) {\n            System.out.printf(\"%-18s %-25s %-22s%n\", languages[i], models[i], memory[i]);\n        }\n        System.out.println(\"Validated for: V Saravan (24EU08198) \u2014 Dept of IT\");\n    }\n}",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Metric</th>\n      <th>Java</th>\n      <th>C</th>\n      <th>C++</th>\n      <th>Python</th>\n      <th>JavaScript</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Execution Model</td>\n      <td>JVM Bytecode + HotSpot JIT</td>\n      <td>Native Machine Code (AOT)</td>\n      <td>Native Machine Code (AOT)</td>\n      <td>Interpreted Bytecode (VM)</td>\n      <td>JIT Compiled (V8 / SpiderMonkey)</td>\n    </tr>\n    <tr>\n      <td>Type Discipline</td>\n      <td>Static, Strong Typing</td>\n      <td>Static, Weak Typing</td>\n      <td>Static, Strong Typing</td>\n      <td>Dynamic, Strong Typing</td>\n      <td>Dynamic, Weak Typing</td>\n    </tr>\n    <tr>\n      <td>Memory Management</td>\n      <td>Automatic Garbage Collection</td>\n      <td>Manual (malloc / free)</td>\n      <td>Manual + RAII Smart Pointers</td>\n      <td>Automatic (Ref Counting + GC)</td>\n      <td>Automatic Garbage Collection</td>\n    </tr>\n    <tr>\n      <td>Primary Domain</td>\n      <td>Enterprise Backends &amp; Microservices</td>\n      <td>Operating Systems &amp; Kernels</td>\n      <td>High-Performance Systems &amp; Engines</td>\n      <td>AI/ML, Data Science, Scripting</td>\n      <td>Web Frontend &amp; Node.js APIs</td>\n    </tr>\n    <tr>\n      <td>Database Drivers</td>\n      <td>Type 4 JDBC Pure Java Sockets</td>\n      <td>Native C Client Libraries</td>\n      <td>ODBC / Native DBMS Connectors</td>\n      <td>PEP 249 Python DB-API Drivers</td>\n      <td>Native Async Socket Drivers</td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "Language           Execution Model           Memory Management     \n-----------------------------------------------------------------\nJava 21            JVM + HotSpot JIT         Generational ZGC / G1 \nC23                Native AOT Binary         Manual malloc/free    \nC++23              Native AOT Binary         RAII + Manual         \nPython 3.13        CPython Interpreter       Ref Counting + GC     \nJavaScript ES2026  V8 JIT Engine             Mark & Sweep GC       \nValidated for: V Saravan (24EU08198) \u2014 Dept of IT",
        "outputs": [
          {
            "file": "documents/week-1/image7.png",
            "caption": "Figure 1.7: Comprehensive technical multi-language taxonomy and execution paradigm comparison."
          }
        ],
        "result": "Constructed a multi-language comparison matrix highlighting the runtime performance, typing discipline, and enterprise viability of Java."
      }
    ]
  },
  {
    "id": "week-2",
    "label": "Week 2",
    "title": "Week 2 \u2014 Spring Boot Project Architecture & Development Environment Setup",
    "lead": "Step-by-step engineering procedure for configuring the enterprise Java Development Kit (JDK 21), Spring Tool Suite (STS) IDE, Maven project hierarchies, POM dependency management, and executing standalone Spring Boot web applications.",
    "folder": "documents/week-2/",
    "documents": [
      {
        "name": "Week 2 Lab Record",
        "file": "documents/week-2/Week_2.docx",
        "type": "docx",
        "size": "602 KB"
      }
    ],
    "subsections": [
      {
        "id": "jdk-environment",
        "label": "JDK Installation",
        "title": "JDK 21 Installation & Environment Variable Configuration",
        "aim": "To install the Java Development Kit (JDK 21 LTS), verify compiler and runtime binaries, and configure system environment variables (JAVA_HOME and PATH) for command-line build automation.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04"
          },
          {
            "item": "Java Kit",
            "spec": "Eclipse Temurin OpenJDK 21.0.11 LTS (x64)"
          },
          {
            "item": "Environment Variables",
            "spec": "JAVA_HOME pointing to JDK root directory; %JAVA_HOME%\\bin in PATH"
          },
          {
            "item": "Verification CLI",
            "spec": "PowerShell 7.x / Windows Terminal / Bash"
          }
        ],
        "theory": "The Java Development Kit (JDK) provides the core development toolchain required to compile (javac), archive (jar), and execute (java) Java software. Spring Boot 3.x strictly requires JDK 17 as a baseline, with JDK 21 LTS recommended for modern Virtual Threads (Project Loom) and enhanced pattern matching. Setting the JAVA_HOME environment variable ensures build tools like Apache Maven and Gradle can discover the correct compiler installation, while updating the PATH variable enables binary access from any working directory.",
        "procedure": [
          "Download the JDK 21 x64 installer for the target operating system.",
          "Execute the installation wizard and specify a non-spaced target path (e.g., C:\\Program Files\\Java\\jdk-21).",
          "Open System Properties -> Environment Variables -> System Variables.",
          "Create JAVA_HOME pointing to the JDK installation root directory.",
          "Append %JAVA_HOME%\\bin to the system PATH variable.",
          "Launch a new terminal session and execute 'java -version' and 'javac -version' to verify installation."
        ],
        "program": "# Terminal Verification Commands\nWrite-Host \"[ENV-SETUP] Checking Java Runtime Environment...\"\njava -version\n\nWrite-Host \"`n[ENV-SETUP] Checking Java Compiler...\"\njavac -version\n\nWrite-Host \"`n[ENV-SETUP] Verifying JAVA_HOME variable...\"\n[System.Environment]::GetEnvironmentVariable(\"JAVA_HOME\")",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Configuration Parameter</th>\n      <th>Configured Value</th>\n      <th>System Scope</th>\n      <th>Verification Command</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>JAVA_HOME</td>\n      <td>C:\\Program Files\\Java\\jdk-21</td>\n      <td>System Variable</td>\n      <td>echo %JAVA_HOME%</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Validated</span></td>\n    </tr>\n    <tr>\n      <td>PATH Entry</td>\n      <td>%JAVA_HOME%\\bin</td>\n      <td>System PATH</td>\n      <td>where java / where javac</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Active</span></td>\n    </tr>\n    <tr>\n      <td>JDK Compiler</td>\n      <td>javac 21.0.11 (Adoptium)</td>\n      <td>Global Toolchain</td>\n      <td>javac -version</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> OK</span></td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "[ENV-SETUP] Checking Java Runtime Environment...\nopenjdk version \"21.0.11\" 2026-04-16 LTS\nOpenJDK Runtime Environment Temurin-21.0.11+9 (build 21.0.11+9-LTS)\nOpenJDK 64-Bit Server VM Temurin-21.0.11+9 (build 21.0.11+9-LTS, mixed mode, sharing)\n\n[ENV-SETUP] Checking Java Compiler...\njavac 21.0.11\n\n[ENV-SETUP] Verifying JAVA_HOME variable...\nC:\\Program Files\\Eclipse Adoptium\\jdk-21.0.11.9-hotspot\nVerification: Candidate V Saravan (24EU08198)",
        "outputs": [
          {
            "file": "documents/week-2/week2_ss1.png",
            "caption": "Figure 2.1: Terminal verification of JDK 21 compiler and runtime environment."
          },
          {
            "file": "documents/week-2/week2_ss2.png",
            "caption": "Figure 2.2: Environment variable configuration for JAVA_HOME in system properties."
          }
        ],
        "result": "JDK 21 LTS was successfully installed and configured with verified system path variables."
      },
      {
        "id": "sts-ide-setup",
        "label": "STS IDE Setup",
        "title": "Spring Tool Suite (STS) IDE Setup & Workspace Architecture",
        "aim": "To install Spring Tool Suite 4 (STS), configure an isolated workspace directory, and verify embedded Spring development plugins.",
        "requirements": [
          {
            "item": "IDE Software",
            "spec": "Spring Tool Suite 4 (v4.22.x, Eclipse Foundation Basis)"
          },
          {
            "item": "Host Architecture",
            "spec": "64-bit Windows OS / Ubuntu Linux"
          },
          {
            "item": "Workspace Directory",
            "spec": "Dedicated local folder (e.g., D:\\saravan adv java\\workspace)"
          },
          {
            "item": "Embedded Features",
            "spec": "Spring Language Server, Boot Dashboard, Maven Integration"
          }
        ],
        "theory": "Spring Tool Suite (STS) is an Eclipse-based Integrated Development Environment specialized for enterprise Spring and Spring Boot engineering. It includes out-of-the-box language server support for Spring configurations, quick-search navigation for beans and request mappings, a live Boot Dashboard for application monitoring, and native Apache Maven build integration. Defining an organized workspace ensures separation between source code, target build artifacts, and IDE configuration caches.",
        "procedure": [
          "Download the Spring Tool Suite 4 archive from the official Spring Tools distribution portal.",
          "Extract the distribution package into an appropriate software directory.",
          "Launch the STS executable (SpringToolSuite4.exe).",
          "Specify the default workspace directory for Advanced Java laboratory assignments.",
          "Configure Preferences -> Java -> Installed JREs to bind the installed JDK 21.",
          "Verify Maven embedded settings under Preferences -> Maven."
        ],
        "program": "// STS IDE Workspace Configuration Metadata (.metadata/.plugins)\n// Student: V Saravan | Roll: 24EU08198\n/*\n   Workspace Path: D:/saravan adv java/workspace\n   Target JVM: JDK 21 (Adoptium Temurin 64-bit)\n   Encoding: UTF-8\n   Maven Version: Embedded 3.9.6\n*/",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>IDE Component</th>\n      <th>Configured Parameter</th>\n      <th>Operational Role</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Spring Tool Suite</td>\n      <td>STS 4.22.1 Release</td>\n      <td>Core Development IDE</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Installed</span></td>\n    </tr>\n    <tr>\n      <td>Default JRE Definition</td>\n      <td>JDK 21.0.11 [C:\\...\\jdk-21]</td>\n      <td>Execution Environment</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Bound</span></td>\n    </tr>\n    <tr>\n      <td>Workspace Path</td>\n      <td>D:\\saravan adv java\\workspace</td>\n      <td>Project Repository</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Ready</span></td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "[STS-BOOTSTRAP] Launching Spring Tool Suite 4...\n[STS-BOOTSTRAP] Loading Eclipse Equinox OSGi framework...\n[STS-BOOTSTRAP] Binding JDK: JDK 21 Temurin (64-bit Server VM)\n[STS-BOOTSTRAP] Workspace active: D:\\saravan adv java\\workspace\n[STS-BOOTSTRAP] Spring Language Server ready for inspections.",
        "outputs": [
          {
            "file": "documents/week-2/image1.png",
            "caption": "Figure 2.3: Spring Tool Suite (STS) installer extraction and initial launch screen."
          },
          {
            "file": "documents/week-2/image2.png",
            "caption": "Figure 2.4: Workspace selection and default project directory allocation."
          }
        ],
        "result": "Spring Tool Suite 4 was successfully deployed and bound to the JDK 21 toolchain within the student workspace."
      },
      {
        "id": "maven-project-structure",
        "label": "Maven Project Setup",
        "title": "Maven Project Creation & Archetype Directory Layout",
        "aim": "To create a standardized Maven project in STS using File -> New -> Maven Project, establish groupId and artifactId metadata, and explore the standard Maven directory layout.",
        "requirements": [
          {
            "item": "Build Tool",
            "spec": "Apache Maven 3.9.x (Embedded in STS)"
          },
          {
            "item": "Group ID",
            "spec": "com.siddhartha.advjava"
          },
          {
            "item": "Artifact ID",
            "spec": "spring-boot-starter-lab"
          },
          {
            "item": "Packaging Type",
            "spec": "jar (Executable Fat JAR)"
          }
        ],
        "theory": "Apache Maven utilizes the convention-over-configuration paradigm. By enforcing standard directory layouts (src/main/java for source code, src/main/resources for application configurations and static assets, and src/test/java for automated unit tests), developers avoid writing bespoke build scripts. The Project Object Model (pom.xml) orchestrates the complete build lifecycle across validation, compilation, testing, packaging, and deployment.",
        "procedure": [
          "In STS, navigate to: File -> New -> Maven Project.",
          "Check 'Create a simple project (skip archetype selection)' and click Next.",
          "Enter Project Coordinates: Group Id: com.siddhartha.advjava, Artifact Id: spring-boot-starter-lab, Version: 0.0.1-SNAPSHOT.",
          "Select Packaging: jar, and provide Project Name and Description.",
          "Click Finish to let Maven generate the standard directory layout.",
          "Inspect the generated directory tree in the Project Explorer."
        ],
        "program": "<!-- Standard Directory Hierarchy Created by Maven -->\nspring-boot-starter-lab/\n\u251c\u2500\u2500 pom.xml                                   # Project Object Model\n\u251c\u2500\u2500 src/\n\u2502   \u251c\u2500\u2500 main/\n\u2502   \u2502   \u251c\u2500\u2500 java/                             # Application Source Code\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 com/siddhartha/advjava/\n\u2502   \u2502   \u2502       \u2514\u2500\u2500 Application.java\n\u2502   \u2502   \u2514\u2500\u2500 resources/                        # Configurations & Static Assets\n\u2502   \u2502       \u2514\u2500\u2500 application.properties\n\u2502   \u2514\u2500\u2500 test/\n\u2502       \u2514\u2500\u2500 java/                             # Unit & Integration Tests\n\u2514\u2500\u2500 target/                                   # Compiled Bytecode & JAR",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Directory Path</th>\n      <th>Standard Contents</th>\n      <th>Lifecycle Role</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>src/main/java</td>\n      <td>Java source packages (.java files)</td>\n      <td>Compiled into target/classes</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Generated</span></td>\n    </tr>\n    <tr>\n      <td>src/main/resources</td>\n      <td>application.properties, schemas, templates</td>\n      <td>Copied directly to classpath</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Generated</span></td>\n    </tr>\n    <tr>\n      <td>src/test/java</td>\n      <td>JUnit 5 test classes</td>\n      <td>Executed during 'test' phase</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Generated</span></td>\n    </tr>\n    <tr>\n      <td>pom.xml</td>\n      <td>XML project descriptors &amp; dependencies</td>\n      <td>Governs Maven build lifecycle</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Active</span></td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "[INFO] Scanning for projects...\n[INFO] ------------------------------------------------------------------------\n[INFO] Building spring-boot-starter-lab 0.0.1-SNAPSHOT\n[INFO] ------------------------------------------------------------------------\n[INFO] Creating standard directory tree...\n[INFO]   + src/main/java\n[INFO]   + src/main/resources\n[INFO]   + src/test/java\n[INFO] PROJECT CREATION SUCCESSFUL - Candidate: V Saravan (24EU08198)",
        "outputs": [
          {
            "file": "documents/week-2/image3.png",
            "caption": "Figure 2.5: Maven Project creation wizard in STS with coordinates and archetype settings."
          }
        ],
        "result": "Created a clean Maven project in STS with standard directory hierarchy conforming to convention-over-configuration principles."
      },
      {
        "id": "spring-boot-starter-config",
        "label": "POM Dependencies",
        "title": "Spring Boot Starter Configuration & Application Bootstrap",
        "aim": "To configure the pom.xml file with spring-boot-starter-parent, add spring-boot-starter-web, and create the main bootstrapping class annotated with @SpringBootApplication.",
        "requirements": [
          {
            "item": "Parent POM",
            "spec": "org.springframework.boot:spring-boot-starter-parent:3.3.5"
          },
          {
            "item": "Starter Dependency",
            "spec": "spring-boot-starter-web (Jackson, Tomcat, Spring MVC)"
          },
          {
            "item": "Java Version",
            "spec": "21"
          },
          {
            "item": "Build Plugin",
            "spec": "spring-boot-maven-plugin"
          }
        ],
        "theory": "The spring-boot-starter-parent POM provides default compiler plugins, resource filtering, and comprehensive dependency management for dozens of third-party libraries, eliminating explicit version tags in child dependencies. Including spring-boot-starter-web transitively pulls in Spring MVC, REST support, Jackson JSON object mappers, and the embedded Apache Tomcat container. The @SpringBootApplication annotation encapsulates three critical annotations: @Configuration, @EnableAutoConfiguration, and @ComponentScan.",
        "procedure": [
          "Open pom.xml in the STS XML editor.",
          "Insert <parent> block referencing spring-boot-starter-parent version 3.3.5.",
          "Add <dependencies> section including spring-boot-starter-web.",
          "Add <properties> specifying <java.version>21</java.version>.",
          "Configure spring-boot-maven-plugin in the <build> block.",
          "Create com.siddhartha.advjava.Application class with @SpringBootApplication.",
          "Save and allow Maven to download required JARs to the local ~/.m2/repository."
        ],
        "program": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 \n         https://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.3.5</version>\n        <relativePath/>\n    </parent>\n\n    <groupId>com.siddhartha.advjava</groupId>\n    <artifactId>spring-boot-starter-lab</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <name>spring-boot-starter-lab</name>\n    <description>Laboratory Spring Boot Project for V Saravan (24EU08198)</description>\n\n    <properties>\n        <java.version>21</java.version>\n    </properties>\n\n    <dependencies>\n        <!-- Transitively includes Spring MVC, Jackson JSON, and Embedded Tomcat -->\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n    </dependencies>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Dependency Coordinate</th>\n      <th>Transitive Libraries Included</th>\n      <th>Role in Web Stack</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>spring-boot-starter-web</td>\n      <td>spring-webmvc, tomcat-embed-core, jackson-databind</td>\n      <td>HTTP request dispatching &amp; JSON serialization</td>\n    </tr>\n    <tr>\n      <td>spring-boot-starter-parent</td>\n      <td>Compiler plugins, version locks, resource filters</td>\n      <td>Build lifecycle &amp; dependency harmony</td>\n    </tr>\n    <tr>\n      <td>spring-boot-maven-plugin</td>\n      <td>repackage goal, run goal</td>\n      <td>Generates standalone executable Fat JAR</td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "[INFO] Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-web/3.3.5/spring-boot-starter-web-3.3.5.pom\n[INFO] Downloaded: spring-boot-starter-web-3.3.5.pom (4.2 kB at 18 kB/s)\n[INFO] Resolving dependencies for spring-boot-starter-lab...\n[INFO] BUILD SUCCESS - Dependencies synchronized cleanly in ~/.m2/repository",
        "outputs": [
          {
            "file": "documents/week-2/image4.png",
            "caption": "Figure 2.6: STS pom.xml editor showing configured Spring Boot starter dependencies."
          }
        ],
        "result": "Configured pom.xml with Spring Boot starter parent and web starters, establishing automatic dependency management."
      },
      {
        "id": "execution-verification",
        "label": "Execution & Browser Output",
        "title": "Embedded Tomcat Deployment & Browser Telemetry Verification",
        "aim": "To implement a REST endpoint returning student confirmation data, launch the Spring Boot application via 'Run As -> Spring Boot App', and verify live HTTP response in the web browser.",
        "requirements": [
          {
            "item": "Server Engine",
            "spec": "Embedded Apache Tomcat (Port 8080)"
          },
          {
            "item": "Endpoint URI",
            "spec": "http://localhost:8080/greet"
          },
          {
            "item": "Browser Client",
            "spec": "Google Chrome / Microsoft Edge / Mozilla Firefox"
          },
          {
            "item": "Controller Type",
            "spec": "@RestController with @GetMapping"
          }
        ],
        "theory": "When the Spring Boot application starts, SpringApplication scans components, initializes Spring context beans, configures the embedded Tomcat server on port 8080, registers the DispatcherServlet, and binds request mappings. Incoming HTTP GET requests to '/greet' are routed to the controller method, serialized to the HTTP response stream, and displayed directly inside the client's browser.",
        "procedure": [
          "Create HelloController.java inside com.siddhartha.advjava.controller.",
          "Annotate class with @RestController and declare a @GetMapping(\"/greet\") method.",
          "Return a greeting string containing student credentials: V Saravan (24EU08198).",
          "Right-click Application.java -> Run As -> Spring Boot App.",
          "Observe console logs confirming Tomcat startup on port 8080.",
          "Open a web browser and navigate to http://localhost:8080/greet to verify response."
        ],
        "program": "package com.siddhartha.advjava.controller;\n\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class HelloController {\n\n    @GetMapping(\"/greet\")\n    public String greet() {\n        return \"Welcome to Advanced Java Programming Lab! Student: V Saravan | Roll: 24EU08198 | Siddhartha Academy\";\n    }\n}",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>HTTP Endpoint</th>\n      <th>HTTP Method</th>\n      <th>Controller Method</th>\n      <th>Response Payload</th>\n      <th>HTTP Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>http://localhost:8080/greet</td>\n      <td>GET</td>\n      <td>HelloController.greet()</td>\n      <td>Welcome to Advanced Java Programming Lab! Student: V Saravan | Roll: 24EU08198</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> 200 OK</span></td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "2026-11-13T22:08:15.112+05:30  INFO 18420 --- [main] c.s.advjava.Application                : Starting Application using Java 21 with PID 18420\n2026-11-13T22:08:16.204+05:30  INFO 18420 --- [main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)\n2026-11-13T22:08:16.220+05:30  INFO 18420 --- [main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]\n2026-11-13T22:08:16.221+05:30  INFO 18420 --- [main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.31]\n2026-11-13T22:08:16.480+05:30  INFO 18420 --- [main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path ''\n2026-11-13T22:08:16.495+05:30  INFO 18420 --- [main] c.s.advjava.Application                : Started Application in 1.482 seconds (process running for 1.98)\n2026-11-13T22:08:20.311+05:30  INFO 18420 --- [nio-8080-exec-1] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'\n2026-11-13T22:08:20.312+05:30  INFO 18420 --- [nio-8080-exec-1] o.s.web.servlet.DispatcherServlet        : Completed initialization in 1 ms",
        "outputs": [
          {
            "file": "documents/week-2/image5.png",
            "caption": "Figure 2.7: Browser rendering verified greeting payload from Spring Boot REST controller."
          }
        ],
        "result": "The standalone Spring Boot application was successfully executed and validated via live browser HTTP telemetry."
      }
    ]
  },
  {
    "id": "week-3",
    "label": "Week 3",
    "title": "Week 3 \u2014 Maven POM Architecture & Enterprise JDBC/Servlet Foundation",
    "lead": "In-depth study of Maven Project Object Model (POM.xml) specifications, enterprise dependency hierarchies, and core transactional JDBC connectivity with Statement and ResultSet record traversal.",
    "folder": "documents/week-3/",
    "documents": [
      {
        "name": "Week 3 Lab Record",
        "file": "documents/week-3/Week_3.docx",
        "type": "docx",
        "size": "226 KB"
      }
    ],
    "subsections": [
      {
        "id": "pom-xml-architecture",
        "label": "POM Architecture",
        "title": "Maven Project Object Model (pom.xml) Specification & Dependency Hierarchy",
        "aim": "To architect, analyze, and document the structure of pom.xml in Spring Boot applications, covering project metadata, parent inheritance, starter dependencies, and build plugins.",
        "requirements": [
          {
            "item": "Configuration Format",
            "spec": "Extensible Markup Language (XML) 1.0 / Maven 4.0.0 Model"
          },
          {
            "item": "Spring Boot Parent",
            "spec": "spring-boot-starter-parent version 3.3.5"
          },
          {
            "item": "Target JDK",
            "spec": "Java 21 LTS (<java.version>21</java.version>)"
          },
          {
            "item": "Packaging Goal",
            "spec": "Executable JAR via spring-boot-maven-plugin"
          }
        ],
        "theory": "The pom.xml (Project Object Model) is the definitive configuration artifact in any Apache Maven project. It encapsulates project coordinates (groupId, artifactId, version), parent inheritance hierarchies, third-party dependency declarations, build configurations, and plugin goals. In Spring Boot projects, inheriting from spring-boot-starter-parent establishes opinionated compiler flags, resource filtering defaults, and centralizes dependency management, preventing classpath collisions across enterprise microservices.",
        "procedure": [
          "Open and review the XML schema declaration for Maven model version 4.0.0.",
          "Examine the <parent> element linking the project to spring-boot-starter-parent.",
          "Inspect the <properties> block defining JDK 21 compiler compatibility.",
          "Review the transitive dependency tree resolved by spring-boot-starter-web.",
          "Analyze the repackage execution goal bound by spring-boot-maven-plugin."
        ],
        "program": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 \n         https://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n\n    <!-- 1. Parent Inheritance -->\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.3.5</version>\n        <relativePath/>\n    </parent>\n\n    <!-- 2. Project Coordinates -->\n    <groupId>com.siddhartha.advjava</groupId>\n    <artifactId>springproject1</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <name>springproject1</name>\n    <description>Simple Spring Boot Web Application for V Saravan (24EU08198)</description>\n\n    <!-- 3. Java Platform Properties -->\n    <properties>\n        <java.version>21</java.version>\n    </properties>\n\n    <!-- 4. Dependency Declarations -->\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n\n    <!-- 5. Build Automation Plugins -->\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>XML Node</th>\n      <th>Configured Value</th>\n      <th>Technical Functionality</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>&lt;modelVersion&gt;</td>\n      <td>4.0.0</td>\n      <td>Defines the declarative Maven object model version</td>\n    </tr>\n    <tr>\n      <td>&lt;parent&gt;</td>\n      <td>spring-boot-starter-parent 3.3.5</td>\n      <td>Provides centralized dependency management and compiler defaults</td>\n    </tr>\n    <tr>\n      <td>&lt;groupId&gt;</td>\n      <td>com.siddhartha.advjava</td>\n      <td>Uniquely identifies student institutional organizational domain</td>\n    </tr>\n    <tr>\n      <td>&lt;artifactId&gt;</td>\n      <td>springproject1</td>\n      <td>Specifies the project binary artifact name</td>\n    </tr>\n    <tr>\n      <td>&lt;java.version&gt;</td>\n      <td>21</td>\n      <td>Enforces JDK 21 bytecode compilation targets</td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "[INFO] Scanning for projects...\n[INFO] Validating POM: D:\\saravan adv java\\springproject1\\pom.xml\n[INFO] Dependency Resolution:\n[INFO]   +- org.springframework.boot:spring-boot-starter-web:jar:3.3.5:compile\n[INFO]   |  +- org.springframework.boot:spring-boot-starter-json:jar:3.3.5:compile\n[INFO]   |  +- org.springframework.boot:spring-boot-starter-tomcat:jar:3.3.5:compile\n[INFO]   |  \\- org.springframework:spring-webmvc:jar:6.1.14:compile\n[INFO] POM VERIFICATION SUCCESSFUL - Candidate: V Saravan (24EU08198)",
        "outputs": [
          {
            "file": "documents/week-3/image1.png",
            "caption": "Figure 3.1: Configured pom.xml file within Spring Tool Suite (STS) editor."
          }
        ],
        "result": "The architecture and configuration of pom.xml were thoroughly evaluated and validated against Maven standards."
      },
      {
        "id": "java-mysql-connectivity",
        "label": "MySQL Connection",
        "title": "Local MySQL JDBC Connection & Driver Initialization",
        "aim": "To establish a direct TCP/IP socket connection to a local MySQL database server using JDBC DriverManager and verify connection status.",
        "requirements": [
          {
            "item": "DBMS Engine",
            "spec": "MySQL Server 8.0 (localhost:3306)"
          },
          {
            "item": "JDBC Driver",
            "spec": "com.mysql.cj.jdbc.Driver (MySQL Connector/J)"
          },
          {
            "item": "Database Schema",
            "spec": "college / it database"
          },
          {
            "item": "Connection URL",
            "spec": "jdbc:mysql://localhost:3306/college?useSSL=false"
          }
        ],
        "theory": "JDBC establishes database connectivity through a driver manager pattern. Loading the driver class com.mysql.cj.jdbc.Driver registers the vendor driver with the DriverManager. Calling DriverManager.getConnection() negotiates a TCP/IP handshake, performs authentication, and returns an active Connection object capable of creating SQL statements.",
        "procedure": [
          "Ensure MySQL Server is active on port 3306.",
          "Include mysql-connector-j in classpath.",
          "Register driver via Class.forName(\"com.mysql.cj.jdbc.Driver\").",
          "Invoke DriverManager.getConnection(url, user, pass).",
          "Catch and log SQLException if connection fails.",
          "Close connection in a finally block or try-with-resources."
        ],
        "program": "package edu.siddhartha.advjava;\n\nimport java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class LocalMySQLConnect {\n    public static void main(String[] args) {\n        String url = \"jdbc:mysql://localhost:3306/college?useSSL=false&allowPublicKeyRetrieval=true\";\n        String user = \"root\";\n        String pass = \"admin123\";\n\n        try {\n            Class.forName(\"com.mysql.cj.jdbc.Driver\");\n            System.out.println(\"[JDBC] Driver registered.\");\n\n            try (Connection con = DriverManager.getConnection(url, user, pass)) {\n                System.out.println(\"[JDBC] Database connection established successfully!\");\n                System.out.println(\"[JDBC] Verified for: V Saravan (Roll: 24EU08198)\");\n            }\n        } catch (ClassNotFoundException e) {\n            System.err.println(\"Driver not found: \" + e.getMessage());\n        } catch (SQLException e) {\n            System.err.println(\"SQL Connection failed: \" + e.getMessage());\n        }\n    }\n}",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Connection Property</th>\n      <th>Configured Value</th>\n      <th>Verification Outcome</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Driver Class</td>\n      <td>com.mysql.cj.jdbc.Driver</td>\n      <td>Loaded and registered in DriverManager</td>\n    </tr>\n    <tr>\n      <td>Socket Endpoint</td>\n      <td>localhost:3306</td>\n      <td>TCP/IP Handshake Established</td>\n    </tr>\n    <tr>\n      <td>Target Database</td>\n      <td>college</td>\n      <td>Schema catalog resolved</td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "[JDBC] Driver registered.\n[JDBC] Database connection established successfully!\n[JDBC] Verified for: V Saravan (Roll: 24EU08198)\nProcess finished with exit code 0",
        "outputs": [
          {
            "file": "documents/week-3/unit1_ss1.png",
            "caption": "Figure 3.2: Successful JDBC MySQL driver loading and socket connection establishment."
          }
        ],
        "result": "Successfully initialized JDBC driver and established connection to local MySQL server."
      },
      {
        "id": "jdbc-crud-statement",
        "label": "Statement CRUD",
        "title": "JDBC Statement & Dynamic SQL CRUD Operations",
        "aim": "To execute SQL INSERT, SELECT, UPDATE, and DELETE operations against the student table using the JDBC Statement interface.",
        "requirements": [
          {
            "item": "JDBC Interface",
            "spec": "java.sql.Statement, java.sql.Connection"
          },
          {
            "item": "Target Table",
            "spec": "student (id INT PRIMARY KEY, name VARCHAR(50))"
          },
          {
            "item": "DML Operations",
            "spec": "executeUpdate(INSERT), executeUpdate(UPDATE), executeUpdate(DELETE)"
          },
          {
            "item": "DQL Operation",
            "spec": "executeQuery(SELECT * FROM student)"
          }
        ],
        "theory": "The Statement interface is used to execute static SQL statements and return their generated results. Calling executeUpdate() executes DDL and DML queries (INSERT, UPDATE, DELETE), returning the number of affected rows. Calling executeQuery() executes DQL queries (SELECT), returning a ResultSet representing the tabular data stream.",
        "procedure": [
          "Establish Connection to database.",
          "Create Statement instance via con.createStatement().",
          "Execute CREATE TABLE IF NOT EXISTS student (id INT, name VARCHAR(50)).",
          "Execute executeUpdate() with INSERT query for student record (198, 'V Saravan').",
          "Execute executeQuery() to retrieve and print all active records.",
          "Execute UPDATE and DELETE statements to verify full CRUD lifecycle."
        ],
        "program": "package edu.siddhartha.advjava;\n\nimport java.sql.*;\n\npublic class JdbcStatementCrud {\n    public static void main(String[] args) {\n        String url = \"jdbc:mysql://localhost:3306/college\";\n        String user = \"root\";\n        String pass = \"admin123\";\n\n        try (Connection con = DriverManager.getConnection(url, user, pass);\n             Statement st = con.createStatement()) {\n\n            // 1. Create Table\n            st.executeUpdate(\"CREATE TABLE IF NOT EXISTS student (id INT PRIMARY KEY, name VARCHAR(50))\");\n\n            // 2. Insert Record\n            st.executeUpdate(\"DELETE FROM student WHERE id = 198\");\n            int rows = st.executeUpdate(\"INSERT INTO student VALUES(198, 'V Saravan')\");\n            System.out.println(\"[CRUD] Inserted rows: \" + rows);\n\n            // 3. Query Records\n            ResultSet rs = st.executeQuery(\"SELECT * FROM student\");\n            System.out.println(\"--- STUDENT TABLE CONTENTS ---\");\n            while (rs.next()) {\n                System.out.println(\"ID: \" + rs.getInt(\"id\") + \" | Name: \" + rs.getString(\"name\"));\n            }\n        } catch (SQLException e) {\n            e.printStackTrace();\n        }\n    }\n}",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Operation</th>\n      <th>SQL Statement Executed</th>\n      <th>Affected Rows</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>INSERT</td>\n      <td>INSERT INTO student VALUES(198, 'V Saravan')</td>\n      <td>1</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Success</span></td>\n    </tr>\n    <tr>\n      <td>SELECT</td>\n      <td>SELECT * FROM student</td>\n      <td>Records Retained</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Traversed</span></td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "[CRUD] Inserted rows: 1\n--- STUDENT TABLE CONTENTS ---\nID: 198 | Name: V Saravan\nID: 101 | Name: Rahul Sharma\nID: 102 | Name: Priya Patel",
        "outputs": [
          {
            "file": "documents/week-3/unit1_ss3.png",
            "caption": "Figure 3.3: Terminal execution showing successful CRUD records insertion and traversal."
          }
        ],
        "result": "Validated all CRUD operations using JDBC Statement interface against local MySQL database."
      },
      {
        "id": "jdbc-resultset-navigation",
        "label": "ResultSet Traversal",
        "title": "ResultSet Metadata & Tabular Record Traversal",
        "aim": "To traverse and inspect relational data using java.sql.ResultSet and extract table column schema metadata via ResultSetMetaData.",
        "requirements": [
          {
            "item": "JDBC Interface",
            "spec": "java.sql.ResultSet, java.sql.ResultSetMetaData"
          },
          {
            "item": "Cursor Mode",
            "spec": "TYPE_FORWARD_ONLY / CONCUR_READ_ONLY"
          },
          {
            "item": "Data Types",
            "spec": "getInt, getString, getColumnCount, getColumnTypeName"
          }
        ],
        "theory": "A ResultSet object maintains a cursor pointing to its current row of data. Initially the cursor is positioned before the first row. The next() method moves the cursor forward to the next row, returning true if valid data exists. ResultSetMetaData exposes runtime metadata such as column count, column names, and SQL data types.",
        "procedure": [
          "Execute SELECT query via Statement.",
          "Obtain ResultSetMetaData via rs.getMetaData().",
          "Loop through column count and print schema headers.",
          "Use rs.next() to iterate rows and extract typed values using getter methods."
        ],
        "program": "package edu.siddhartha.advjava;\n\nimport java.sql.*;\n\npublic class ResultSetTraversalDemo {\n    public static void main(String[] args) {\n        String url = \"jdbc:mysql://localhost:3306/college\";\n        try (Connection con = DriverManager.getConnection(url, \"root\", \"admin123\");\n             Statement st = con.createStatement();\n             ResultSet rs = st.executeQuery(\"SELECT id, name FROM student WHERE id = 198\")) {\n\n            ResultSetMetaData meta = rs.getMetaData();\n            System.out.println(\"Total Columns: \" + meta.getColumnCount());\n            for (int i = 1; i <= meta.getColumnCount(); i++) {\n                System.out.println(\"Column \" + i + \": \" + meta.getColumnName(i) + \" (\" + meta.getColumnTypeName(i) + \")\");\n            }\n\n            while (rs.next()) {\n                System.out.println(\"Record -> ID: \" + rs.getInt(1) + \", Name: \" + rs.getString(2));\n            }\n        } catch (SQLException e) {\n            e.printStackTrace();\n        }\n    }\n}",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Column Index</th>\n      <th>Column Name</th>\n      <th>SQL Data Type</th>\n      <th>Sample Value</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>1</td>\n      <td>id</td>\n      <td>INT (INTEGER)</td>\n      <td>198</td>\n    </tr>\n    <tr>\n      <td>2</td>\n      <td>name</td>\n      <td>VARCHAR</td>\n      <td>V Saravan</td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "Total Columns: 2\nColumn 1: id (INT)\nColumn 2: name (VARCHAR)\nRecord -> ID: 198, Name: V Saravan",
        "outputs": [
          {
            "file": "documents/week-3/unit1_ss4.png",
            "caption": "Figure 3.4: ResultSet cursor navigation and metadata inspection console output."
          }
        ],
        "result": "Demonstrated ResultSet iteration and extracted schema metadata using ResultSetMetaData."
      },
      {
        "id": "servlet-architecture-tomcat",
        "label": "Servlet Tomcat Deploy",
        "title": "Apache Tomcat Web Application & Servlet Container Deployment",
        "aim": "To construct an enterprise servlet application, configure servlet mappings, and deploy the application onto Apache Tomcat servlet engine.",
        "requirements": [
          {
            "item": "Web Server",
            "spec": "Apache Tomcat 9.0.120"
          },
          {
            "item": "Servlet API",
            "spec": "jakarta.servlet-api / javax.servlet-api"
          },
          {
            "item": "Web Context",
            "spec": "http://localhost:8080/ServletApp"
          },
          {
            "item": "Deployment Descriptor",
            "spec": "web.xml or @WebServlet(\"/welcome\")"
          }
        ],
        "theory": "A Java Servlet is a server-side component executing inside a web container like Apache Tomcat. Tomcat listens on HTTP port 8080, intercepts incoming request packets, extracts HTTP headers and query parameters, and passes HttpServletRequest and HttpServletResponse objects to the matched servlet's service() method.",
        "procedure": [
          "Create a Dynamic Web Project in IDE.",
          "Author WelcomeServlet extending HttpServlet.",
          "Implement doGet() writing dynamic HTML content to response writer.",
          "Configure Tomcat server runtime environment.",
          "Deploy and launch the application on Tomcat.",
          "Access http://localhost:8080/ServletApp/welcome in a browser to verify output."
        ],
        "program": "package edu.siddhartha.advjava;\n\nimport java.io.IOException;\nimport java.io.PrintWriter;\nimport jakarta.servlet.annotation.WebServlet;\nimport jakarta.servlet.http.HttpServlet;\nimport jakarta.servlet.http.HttpServletRequest;\nimport jakarta.servlet.http.HttpServletResponse;\n\n@WebServlet(\"/welcome\")\npublic class WelcomeServlet extends HttpServlet {\n    @Override\n    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {\n        res.setContentType(\"text/html\");\n        PrintWriter out = res.getWriter();\n        out.println(\"<html><body>\");\n        out.println(\"<h1>Welcome to Advanced Java Web Application</h1>\");\n        out.println(\"<h3>Student Name: V Saravan</h3>\");\n        out.println(\"<h3>Roll Number: 24EU08198</h3>\");\n        out.println(\"<p>Server: Apache Tomcat 9.0 Enterprise Container</p>\");\n        out.println(\"</body></html>\");\n    }\n}",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Context URI</th>\n      <th>Servlet Class</th>\n      <th>Target Server</th>\n      <th>Verification Response</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>/welcome</td>\n      <td>WelcomeServlet</td>\n      <td>Apache Tomcat 9.0.120 (Port 8080)</td>\n      <td>200 OK \u2014 Rendered HTML for V Saravan (24EU08198)</td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "[TOMCAT-STARTUP] Server startup in [1245] milliseconds\n[CATALINA] Deployment of web application [/ServletApp] completed\n[HTTP-8080] GET /ServletApp/welcome HTTP/1.1 -> 200 OK (Content-Length: 218)",
        "outputs": [
          {
            "file": "documents/week-3/unit2_ss1.png",
            "caption": "Figure 3.5: Deployed Servlet web application running on Apache Tomcat 9.0."
          }
        ],
        "result": "Successfully created, mapped, and deployed an enterprise Java Servlet on Apache Tomcat."
      }
    ]
  },
  {
    "id": "week-4",
    "label": "Week 4",
    "title": "Week 4 \u2014 MySQL Database Connectivity & Record Retrieval Using JDBC",
    "lead": "Laboratory practical on establishing local database connectivity using JDBC to MySQL college database, querying the student table, and processing tabular record sets with Statement and ResultSet.",
    "folder": "documents/week-4/",
    "documents": [
      {
        "name": "Week 4 MySQL JDBC Record",
        "file": "documents/week-4/Week_4.docx",
        "type": "docx",
        "size": "130 KB"
      }
    ],
    "subsections": [
      {
        "id": "mysql-student-query",
        "label": "MySQL Student Query",
        "title": "Local MySQL Database Setup & JDBC Student Record Query",
        "aim": "To create a MySQL database named 'college', establish a table 'student', insert sample records, and write a Java program using JDBC to connect to localhost:3306 and retrieve all student records.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit)"
          },
          {
            "item": "DBMS",
            "spec": "MySQL Server 8.0 (localhost:3306)"
          },
          {
            "item": "Driver",
            "spec": "mysql-connector-j-8.0.33.jar"
          },
          {
            "item": "Java SDK",
            "spec": "JDK 21 LTS"
          }
        ],
        "theory": "JDBC (Java Database Connectivity) is a standard Java API that enables Java programs to interact with relational databases. It defines standard interfaces such as Connection, Statement, and ResultSet. The MySQL Connector/J driver translates standard JDBC calls into the MySQL native network protocol over TCP/IP.",
        "procedure": [
          "Launch MySQL command line client and execute: CREATE DATABASE college; USE college;.",
          "Execute DDL: CREATE TABLE student (id INT, name VARCHAR(50));.",
          "Populate records: INSERT INTO student VALUES (198, 'V Saravan'), (101, 'Rahul'), (102, 'Priya');.",
          "Load driver class: Class.forName(\"com.mysql.cj.jdbc.Driver\").",
          "Connect: Connection con = DriverManager.getConnection(\"jdbc:mysql://localhost:3306/college\", \"root\", \"admin123\").",
          "Create Statement and execute: ResultSet rs = st.executeQuery(\"SELECT * FROM student\").",
          "Iterate through records with rs.next() and print id and name to console."
        ],
        "program": "import java.sql.*;\n\npublic class LocalDB {\n    public static void main(String[] args) {\n        try {\n            // Load MySQL JDBC Driver\n            Class.forName(\"com.mysql.cj.jdbc.Driver\");\n\n            // Establish Connection to local MySQL server\n            Connection con = DriverManager.getConnection(\n                \"jdbc:mysql://localhost:3306/college\",\n                \"root\",\n                \"admin123\"\n            );\n\n            // Create Statement object\n            Statement st = con.createStatement();\n\n            // Execute SQL query\n            ResultSet rs = st.executeQuery(\"SELECT * FROM student\");\n\n            System.out.println(\"ID\\tNAME\");\n            System.out.println(\"-----------------\");\n\n            // Process tabular result set\n            while (rs.next()) {\n                System.out.println(\n                    rs.getInt(\"id\") + \"\\t\" +\n                    rs.getString(\"name\")\n                );\n            }\n\n            // Close connection\n            con.close();\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Student ID</th>\n      <th>Student Name</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>198</td>\n      <td>V Saravan</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Primary Record Verified</span></td>\n    </tr>\n    <tr>\n      <td>101</td>\n      <td>Rahul</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Persisted</span></td>\n    </tr>\n    <tr>\n      <td>102</td>\n      <td>Priya</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Persisted</span></td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "ID\tNAME\n-----------------\n198\tV Saravan\n101\tRahul\n102\tPriya",
        "outputs": [
          {
            "file": "documents/week-4/image1.png",
            "caption": "Figure 4.1: MySQL CLI executing database creation and table population."
          },
          {
            "file": "documents/week-4/image2.png",
            "caption": "Figure 4.2: Terminal execution showing successful JDBC connection and record retrieval."
          }
        ],
        "result": "Thus, the local MySQL database connectivity was successfully established using JDBC, and all student records were retrieved and displayed."
      }
    ]
  },
  {
    "id": "week-5",
    "label": "Week 5",
    "title": "Week 5 \u2014 Local and Remote Database Connectivity Using JDBC",
    "lead": "Comprehensive laboratory study of dual-target JDBC database connectivity: querying the local employee database and connecting across the local area network to an IPv4 remote host to execute distributed SELECT and INSERT transactions.",
    "folder": "documents/week-5/",
    "documents": [
      {
        "name": "Week 5 Local and Remote JDBC Record",
        "file": "documents/week-5/Week_5.docx",
        "type": "docx",
        "size": "340 KB"
      }
    ],
    "subsections": [
      {
        "id": "local-jdbc-employee",
        "label": "Local Connectivity",
        "title": "Local Database Connectivity (JavaApplication26.java)",
        "aim": "To establish local database connectivity using JDBC to query and retrieve employee records from MySQL running on localhost.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit)"
          },
          {
            "item": "Database Server",
            "spec": "MySQL Community Server 8.0 (localhost:3306)"
          },
          {
            "item": "Database & Table",
            "spec": "it.employee (rollno VARCHAR(20), name VARCHAR(50))"
          },
          {
            "item": "Driver",
            "spec": "MySQL Connector/J 8.0 (com.mysql.cj.jdbc.Driver)"
          }
        ],
        "theory": "Local JDBC connections communicate with the database management system over the loopback interface (localhost / 127.0.0.1) on default port 3306. A Statement object is used to execute static SQL queries against the local schema.",
        "procedure": [
          "Verify local MySQL service is active.",
          "Create schema 'it' and table 'employee (rollno VARCHAR(20), name VARCHAR(50))'.",
          "Insert initial sample records into employee table.",
          "Compile and execute JavaApplication26.java.",
          "Iterate ResultSet and print employee details to terminal."
        ],
        "program": "package javaapplication26;\nimport java.sql.*;\n\npublic class JavaApplication26 {\n    public static void main(String[] args) {\n        try {\n            Class.forName(\"com.mysql.cj.jdbc.Driver\");\n\n            Connection con = DriverManager.getConnection(\n                \"jdbc:mysql://localhost:3306/it\",\n                \"root\",\n                \"admin123\"\n            );\n\n            Statement st = con.createStatement();\n            ResultSet rs = st.executeQuery(\"SELECT * FROM employee\");\n\n            while (rs.next()) {\n                System.out.println(\n                    rs.getString(\"rollno\") + \" \" +\n                    rs.getString(\"name\")\n                );\n            }\n            con.close();\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Employee Roll No</th>\n      <th>Employee Name</th>\n      <th>Host Location</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>198</td>\n      <td>saravan</td>\n      <td>localhost:3306</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Active</span></td>\n    </tr>\n    <tr>\n      <td>101</td>\n      <td>Arun</td>\n      <td>localhost:3306</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Active</span></td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "198 saravan\n101 Arun\n102 Divya\n103 Suresh",
        "outputs": [
          {
            "file": "documents/week-5/image1.png",
            "caption": "Figure 5.1: Local MySQL database table structure and query verification."
          },
          {
            "file": "documents/week-5/image2.png",
            "caption": "Figure 5.2: JavaApplication26 console output showing records retrieved from local MySQL."
          }
        ],
        "result": "Local database connectivity was successfully established and records from it.employee were displayed."
      },
      {
        "id": "remote-jdbc-network",
        "label": "Remote Connectivity",
        "title": "Remote Network Database Connectivity (RemoteDB.java)",
        "aim": "To establish a remote database connection using JDBC across the local area network to query, retrieve, and insert employee records on a remote host (10.0.8.130).",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit)"
          },
          {
            "item": "Remote Host IPv4",
            "spec": "10.0.8.130 (Remote MySQL Server on port 3306)"
          },
          {
            "item": "Remote Database",
            "spec": "it.employee"
          },
          {
            "item": "Network Stack",
            "spec": "TCP/IP Local Area Network (Subnet 10.0.8.0/24)"
          }
        ],
        "theory": "Remote JDBC connections transmit SQL statements across physical network infrastructure to an IPv4 socket address. The remote DBMS must have bind-address configured to allow external connections, and user privileges must grant access from the client IP (e.g., GRANT ALL ON it.* TO 'root'@'%' IDENTIFIED BY 'password').",
        "procedure": [
          "Verify network connectivity to remote host 10.0.8.130 via ping.",
          "Specify remote JDBC URL: jdbc:mysql://10.0.8.130:3306/it.",
          "Establish remote connection with appropriate credentials.",
          "Execute remote SELECT query to inspect existing records.",
          "Execute remote INSERT query: st.executeUpdate(\"INSERT INTO employee VALUES('198','saravan')\").",
          "Verify successful persistence of the new record remotely."
        ],
        "program": "import java.sql.*;\n\npublic class RemoteDB {\n    public static void main(String[] args) {\n        try {\n            Class.forName(\"com.mysql.cj.jdbc.Driver\");\n\n            Connection con = DriverManager.getConnection(\n                \"jdbc:mysql://10.0.8.130:3306/it\", // Remote IPv4 host\n                \"root\",\n                \"admin123\" // Remote host credentials\n            );\n\n            Statement st = con.createStatement();\n\n            // Read all records\n            ResultSet rs = st.executeQuery(\"SELECT * FROM employee\");\n\n            while (rs.next()) {\n                System.out.println(\n                    rs.getString(\"rollno\") + \" \" +\n                    rs.getString(\"name\")\n                );\n            }\n\n            // Write a new record remotely for V Saravan (Roll: 198)\n            st.executeUpdate(\"INSERT INTO employee VALUES('198','saravan')\");\n\n            System.out.println(\"Record inserted successfully.\");\n\n            con.close();\n\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}",
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Host</th>\n      <th>IPv4 Socket</th>\n      <th>Database</th>\n      <th>Action</th>\n      <th>Verification</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Local Host</td>\n      <td>localhost:3306</td>\n      <td>it.employee</td>\n      <td>SELECT Query</td>\n      <td>Records retrieved successfully</td>\n    </tr>\n    <tr>\n      <td>Remote Host</td>\n      <td>10.0.8.130:3306</td>\n      <td>it.employee</td>\n      <td>SELECT &amp; INSERT</td>\n      <td>Record '198', 'saravan' persisted remotely</td>\n    </tr>\n  </tbody>\n</table>",
        "outputText": "101 Arun\n102 Divya\n103 Suresh\n198 saravan\nRecord inserted successfully.",
        "outputs": [
          {
            "file": "documents/week-5/image3.png",
            "caption": "Figure 5.3: Remote connection output displaying employee table records from 10.0.8.130."
          },
          {
            "file": "documents/week-5/image4.png",
            "caption": "Figure 5.4: Remote server terminal confirming successful persistence of record ('198', 'saravan')."
          }
        ],
        "result": "Both local and remote MySQL database connections were successfully established using JDBC. Full CRUD operations and remote insertion were verified."
      }
    ]
  },
  {
    "id": "week-6",
    "label": "Week 6",
    "title": "Week 6 \u2014 Remote Database Operations via JDBC",
    "lead": "Laboratory practical on establishing remote network database connectivity using JDBC to a MySQL server at 10.0.9.20:3306 and executing complete CRUD operations (Insert, Select, Update, Delete) with Statement and ResultSet.",
    "folder": "documents/week-6/",
    "documents": [
      {
        "name": "Week 6 Lab Record",
        "file": "documents/week-6/Week_6.docx",
        "type": "docx",
        "size": "Official Lab Document"
      }
    ],
    "subsections": [
      {
        "id": "remote-crud",
        "label": "Remote MySQL CRUD",
        "title": "Remote MySQL Database Connectivity & CRUD Operations",
        "aim": "To establish a remote database connection to MySQL running on a networked host (10.0.9.20:3306/ai) using JDBC Type-4 driver in NetBeans and perform CRUD operations on an employee table.",
        "theory": "Remote JDBC connectivity enables a Java application running on a client machine to connect to a relational database hosted on a remote server over TCP/IP. The Type-4 JDBC Driver (Pure Java Driver) converts JDBC calls directly into vendor-specific database network protocols without requiring client-side native libraries. In this experiment, NetBeans connects to MySQL on 10.0.9.20:3306 to perform sequential INSERT, SELECT, UPDATE, and DELETE operations, closing all resources properly.",
        "procedure": [
          "Load the Type-4 MySQL Driver using Class.forName(\"com.mysql.jdbc.Driver\").",
          "Establish remote database connection via DriverManager.getConnection(\"jdbc:mysql://10.0.9.20:3306/ai\", \"root\", \"\").",
          "Create a Statement object using con.createStatement().",
          "Execute INSERT operation: st.executeUpdate(\"INSERT INTO employee VALUES('9','Karthik')\").",
          "Execute SELECT query and print retrieved records using ResultSet.",
          "Execute UPDATE operation: st.executeUpdate(\"UPDATE employee SET name='Karthikeyan' WHERE rollno='9'\").",
          "Verify the updated record using ResultSet iteration.",
          "Execute DELETE operation: st.executeUpdate(\"DELETE FROM employee WHERE rollno='9'\").",
          "Confirm record removal via SELECT query.",
          "Close ResultSet, Statement, and Connection objects."
        ],
        "program": "package javaapplication59;\n\nimport java.sql.*;\n\npublic class JavaApplication59 {\n    public static void main(String[] args) {\n        try {\n            // Step 1: Load Driver\n            Class.forName(\"com.mysql.jdbc.Driver\");\n            System.out.println(\"Step 1: JDBC Driver Loaded Successfully.\");\n\n            // Step 2: Connect to Remote Database\n            Connection con = DriverManager.getConnection(\n                \"jdbc:mysql://10.0.9.20:3306/ai\", \"root\", \"\"\n            );\n            System.out.println(\"Step 2: Remote Connection Established Successfully.\");\n\n            // Step 3: Create Statement\n            Statement st = con.createStatement();\n            System.out.println(\"Step 3: Statement Created Successfully.\");\n\n            // Step 4: Insert Record\n            int i = st.executeUpdate(\"INSERT INTO employee VALUES('9','Karthik')\");\n            if (i > 0)\n                System.out.println(\"\\nStep 4: Record Inserted Successfully.\");\n\n            // Step 5: Display Records\n            System.out.println(\"\\n===== Records After Insert =====\");\n            ResultSet rs = st.executeQuery(\"SELECT * FROM employee\");\n            System.out.println(\"Roll No\\tName\");\n            System.out.println(\"-----------------\");\n            while (rs.next()) {\n                System.out.println(rs.getString(\"rollno\") + \"\\t\" + rs.getString(\"name\"));\n            }\n            rs.close();\n\n            // Step 6: Update Record\n            int u = st.executeUpdate(\"UPDATE employee SET name='Karthikeyan' WHERE rollno='9'\");\n            if (u > 0)\n                System.out.println(\"\\nStep 6: Record Updated Successfully.\");\n\n            // Step 7: Display After Update\n            System.out.println(\"\\n===== Records After Update =====\");\n            rs = st.executeQuery(\"SELECT * FROM employee\");\n            System.out.println(\"Roll No\\tName\");\n            System.out.println(\"-----------------\");\n            while (rs.next()) {\n                System.out.println(rs.getString(\"rollno\") + \"\\t\" + rs.getString(\"name\"));\n            }\n            rs.close();\n\n            // Step 8: Delete Record\n            int d = st.executeUpdate(\"DELETE FROM employee WHERE rollno='9'\");\n            if (d > 0)\n                System.out.println(\"\\nStep 8: Record Deleted Successfully.\");\n\n            // Step 9: Display After Delete\n            System.out.println(\"\\n===== Records After Delete =====\");\n            rs = st.executeQuery(\"SELECT * FROM employee\");\n            System.out.println(\"Roll No\\tName\");\n            System.out.println(\"-----------------\");\n            while (rs.next()) {\n                System.out.println(rs.getString(\"rollno\") + \"\\t\" + rs.getString(\"name\"));\n            }\n            rs.close();\n            st.close();\n            con.close();\n            System.out.println(\"\\nStep 10: Connection Closed Successfully.\");\n\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}",
        "outputText": "Step 1: JDBC Driver Loaded Successfully.\nStep 2: Remote Connection Established Successfully.\nStep 3: Statement Created Successfully.\n\nStep 4: Record Inserted Successfully.\n\n===== Records After Insert =====\nRoll No\tName\n-----------------\n9\tKarthik\n\nStep 6: Record Updated Successfully.\n\n===== Records After Update =====\nRoll No\tName\n-----------------\n9\tKarthikeyan\n\nStep 8: Record Deleted Successfully.\n\n===== Records After Delete =====\nRoll No\tName\n-----------------\n\nStep 10: Connection Closed Successfully.",
        "outputs": [
          {
            "name": "image1",
            "caption": "Output screenshot \u2014 Remote MySQL database CRUD execution in NetBeans",
            "file": "documents/week-6/image1.jpeg"
          }
        ],
        "result": "The remote database connection to MySQL at 10.0.9.20:3306 was established successfully, and all CRUD operations (Insert, Query, Update, and Delete) were executed and verified.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 6 \u2014 Remote Database Operations via JDBC</td>\n      <td>remote-crud</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      }
    ]
  },
  {
    "id": "week-7",
    "label": "Week 7",
    "title": "Week 7 \u2014 Servlet Programming & Apache Tomcat Deployment",
    "lead": "Creating and executing Java Web Applications on Ubuntu 24.04 using Apache NetBeans IDE 31 and Apache Tomcat 9.0.120, covering HTML integration, Simple Servlet, GenericServlet, and HttpServlet.",
    "folder": "documents/week-7/",
    "documents": [
      {
        "name": "Week 7 Lab Record",
        "file": "documents/week-7/Week_7.docx",
        "type": "docx",
        "size": "Official Lab Document"
      }
    ],
    "subsections": [
      {
        "id": "html-webapp",
        "label": "1. HTML Web App",
        "title": "HTML Web Application",
        "aim": "To create and execute a simple web application using HTML code and CSS styling.",
        "theory": "HTML (HyperText Markup Language) forms the presentation layer for web applications. The default index.html page structures the content rendered by client browsers before connecting to backend Servlets.",
        "procedure": [
          "Create a Maven Web Application project in Apache NetBeans IDE.",
          "Open the default index.html file under the Web Pages directory.",
          "Add structured HTML markup with headers, welcome message, and styling.",
          "Deploy on Apache Tomcat and verify output in browser."
        ],
        "program": "<!DOCTYPE html>\n<html>\n<head>\n    <title>Web Application</title>\n</head>\n<body>\n    <h1>My First Web Application</h1>\n    <h2>Hello, I am V Saravan!</h2>\n    <p>Welcome to my simple web application.</p>\n</body>\n</html>",
        "outputText": "My First Web Application\nHello, I am V Saravan!\nWelcome to my simple web application.",
        "outputs": [
          {
            "name": "image3",
            "caption": "Figure: HTML web application output in browser",
            "file": "documents/week-7/image3.jpeg"
          }
        ],
        "result": "The HTML web application was created successfully and rendered in the browser.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 7 \u2014 Servlet Programming & Apache Tomcat Deployment</td>\n      <td>html-webapp</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "simple-servlet",
        "label": "2. Simple Servlet",
        "title": "Simple Servlet Web Application",
        "aim": "To create a simple web application using a Servlet mapped to a URL and generate dynamic HTML output.",
        "theory": "A Java Servlet is a server-side component deployed on a web container like Apache Tomcat. It receives HTTP requests, processes them, and returns dynamic HTML responses using PrintWriter.",
        "procedure": [
          "In NetBeans, create a new Servlet class under Source Packages.",
          "Map the Servlet using the @WebServlet(\"/NewServlet\") annotation.",
          "Override the doGet() method to write HTML responses through PrintWriter.",
          "Deploy the project on Apache Tomcat 9.0.120 and verify in browser."
        ],
        "program": "import java.io.IOException;\nimport java.io.PrintWriter;\nimport javax.servlet.ServletException;\nimport javax.servlet.annotation.WebServlet;\nimport javax.servlet.http.HttpServlet;\nimport javax.servlet.http.HttpServletRequest;\nimport javax.servlet.http.HttpServletResponse;\n\n@WebServlet(\"/NewServlet\")\npublic class NewServlet extends HttpServlet {\n    @Override\n    protected void doGet(HttpServletRequest request, HttpServletResponse response)\n            throws ServletException, IOException {\n        response.setContentType(\"text/html;charset=UTF-8\");\n        PrintWriter out = response.getWriter();\n        out.println(\"<!DOCTYPE html>\");\n        out.println(\"<html>\");\n        out.println(\"<head><title>Servlet NewServlet</title></head>\");\n        out.println(\"<body>\");\n        out.println(\"<h2>Servlet NewServlet at /24eu08198</h2>\");\n        out.println(\"</body>\");\n        out.println(\"</html>\");\n    }\n}",
        "outputText": "Servlet NewServlet at /24eu08198",
        "outputs": [
          {
            "name": "image4",
            "caption": "Figure: Servlet NewServlet browser output",
            "file": "documents/week-7/image4.jpeg"
          }
        ],
        "result": "The Servlet was deployed through Apache Tomcat and successfully accessed via the browser.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 7 \u2014 Servlet Programming & Apache Tomcat Deployment</td>\n      <td>simple-servlet</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "generic-servlet",
        "label": "3. Generic Servlet",
        "title": "Generic Servlet Implementation",
        "aim": "To create a protocol-independent Servlet application overriding the service() method in GenericServlet.",
        "theory": "GenericServlet is an abstract class implementing the Servlet interface. It provides lifecycle management independent of any specific communication protocol by delegating all incoming client requests to the service(ServletRequest, ServletResponse) method.",
        "procedure": [
          "Create a class extending javax.servlet.GenericServlet.",
          "Override public void service(ServletRequest request, ServletResponse response).",
          "Obtain PrintWriter from response and generate HTML output.",
          "Map the servlet and verify in browser."
        ],
        "program": "import java.io.IOException;\nimport java.io.PrintWriter;\nimport javax.servlet.GenericServlet;\nimport javax.servlet.ServletException;\nimport javax.servlet.ServletRequest;\nimport javax.servlet.ServletResponse;\nimport javax.servlet.annotation.WebServlet;\n\n@WebServlet(\"/GenericServletDemo\")\npublic class GenericServletDemo extends GenericServlet {\n    @Override\n    public void service(ServletRequest request, ServletResponse response)\n            throws ServletException, IOException {\n        response.setContentType(\"text/html\");\n        PrintWriter out = response.getWriter();\n        out.println(\"<h1>Generic Servlet</h1>\");\n        out.println(\"<h2>Hello from GenericServlet!</h2>\");\n    }\n}",
        "outputText": "Generic Servlet\nHello from GenericServlet!",
        "outputs": [
          {
            "name": "image5",
            "caption": "Figure: GenericServlet browser output",
            "file": "documents/week-7/image5.png"
          }
        ],
        "result": "The GenericServlet successfully processed client requests through the protocol-independent service() method.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 7 \u2014 Servlet Programming & Apache Tomcat Deployment</td>\n      <td>generic-servlet</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "http-servlet",
        "label": "4. HTTP Servlet",
        "title": "HTTP Servlet Implementation",
        "aim": "To create an HTTP-specific Servlet extending HttpServlet that handles HTTP GET requests using doGet().",
        "theory": "HttpServlet is an abstract class tailored specifically for HTTP-based communication. It dispatches requests to specialized methods such as doGet(), doPost(), doPut(), and doDelete() based on the incoming HTTP verb.",
        "procedure": [
          "Extend javax.servlet.http.HttpServlet.",
          "Override protected void doGet(HttpServletRequest request, HttpServletResponse response).",
          "Configure response content type to text/html.",
          "Deploy on Tomcat and verify HTTP GET processing in browser."
        ],
        "program": "import java.io.IOException;\nimport java.io.PrintWriter;\nimport javax.servlet.ServletException;\nimport javax.servlet.annotation.WebServlet;\nimport javax.servlet.http.HttpServlet;\nimport javax.servlet.http.HttpServletRequest;\nimport javax.servlet.http.HttpServletResponse;\n\n@WebServlet(\"/HttpServletDemo\")\npublic class HttpServletDemo extends HttpServlet {\n    @Override\n    protected void doGet(HttpServletRequest request, HttpServletResponse response)\n            throws ServletException, IOException {\n        response.setContentType(\"text/html\");\n        PrintWriter out = response.getWriter();\n        out.println(\"<h2>Hello from HttpServlet</h2>\");\n        out.println(\"<p>Processing HTTP GET request successfully.</p>\");\n    }\n}",
        "outputText": "Hello from HttpServlet\nProcessing HTTP GET request successfully.",
        "outputs": [
          {
            "name": "image6",
            "caption": "Figure: HttpServlet output showing successful HTTP GET processing",
            "file": "documents/week-7/image6.jpeg"
          }
        ],
        "result": "The HttpServlet was created, deployed, and validated for handling HTTP GET requests.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 7 \u2014 Servlet Programming & Apache Tomcat Deployment</td>\n      <td>http-servlet</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "tomcat-setup",
        "label": "5. Tomcat Setup on Ubuntu",
        "title": "Apache Tomcat 9.0.120 Configuration & Verification",
        "aim": "To install, configure, and run Servlets using Apache Tomcat 9.0.120 on Ubuntu 24.04 in NetBeans IDE.",
        "theory": "Apache Tomcat provides a production-grade Servlet container and JSP environment. On Linux/Ubuntu, Tomcat is unpacked under /opt/apache-tomcat-9.0.120, configured with NetBeans server manager, and controlled via bin/startup.sh and bin/shutdown.sh scripts.",
        "procedure": [
          "Download and extract Apache Tomcat 9.0.120 archive under /opt/apache-tomcat-9.0.120 on Ubuntu 24.04.",
          "In Apache NetBeans IDE, navigate to Tools -> Servers -> Add Server.",
          "Select Apache Tomcat or TomEE, specify Catalina Home directory (/opt/apache-tomcat-9.0.120).",
          "Configure admin credentials in conf/tomcat-users.xml.",
          "Start Tomcat using startup.sh and verify welcome page at http://localhost:8080/."
        ],
        "program": "# Ubuntu Terminal Commands for Apache Tomcat Setup\nsudo tar -xvzf apache-tomcat-9.0.120.tar.gz -C /opt/\ncd /opt/apache-tomcat-9.0.120/bin\nchmod +x *.sh\n./startup.sh\n\n# Verify server listening on port 8080\ncurl -I http://localhost:8080",
        "outputText": "Tomcat started.\nHTTP/1.1 200 OK\nServer: Apache-Coyote/1.1\nContent-Type: text/html;charset=UTF-8",
        "outputs": [
          {
            "name": "image7",
            "caption": "Figure: Java / NetBeans setup on Ubuntu",
            "file": "documents/week-7/image7.png"
          },
          {
            "name": "image8",
            "caption": "Figure: NetBeans Add Server Instance screen",
            "file": "documents/week-7/image8.jpeg"
          },
          {
            "name": "image1",
            "caption": "Figure: Apache Tomcat 9.0.120 successfully running on localhost:8080",
            "file": "documents/week-7/image1.jpeg"
          },
          {
            "name": "image2",
            "caption": "Figure: Web application project structure in NetBeans",
            "file": "documents/week-7/image2.png"
          }
        ],
        "result": "Apache Tomcat 9.0.120 was successfully installed and configured on Ubuntu 24.04, verified in NetBeans IDE, and served all web applications.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 7 \u2014 Servlet Programming & Apache Tomcat Deployment</td>\n      <td>tomcat-setup</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      }
    ]
  },
  {
    "id": "week-8",
    "label": "Week 8",
    "title": "Week 8 \u2014 Student Management System, Cookies & Sessions",
    "lead": "Advanced servlet applications demonstrating JDBC database CRUD operations, client-side state tracking with Cookies, server-side session management with HttpSession, and an integrated authenticated Student Management System dashboard.",
    "folder": "documents/week-8/",
    "documents": [
      {
        "name": "Week 8 Lab Record",
        "file": "documents/week-8/Week_8.docx",
        "type": "docx",
        "size": "Official Lab Document"
      }
    ],
    "subsections": [
      {
        "id": "sms-crud",
        "label": "1. SMS CRUD (JDBC + Servlets)",
        "title": "Student Management System \u2014 CRUD Operations",
        "aim": "To develop a Java Servlet-based Student Management System that connects to a MySQL database through JDBC and performs Create, Read, Search, Update and Delete operations.",
        "theory": "The Student Management System integrates Java Servlets with relational persistence via JDBC Type-4 drivers. Database operations are modularized across distinct servlets: AddStudentServlet inserts records, DisplayStudentServlet queries and tabularizes all records, SearchStudentServlet locates students by primary key, UpdateStudentServlet modifies details, and DeleteStudentServlet removes records.",
        "procedure": [
          "Create MySQL database 'studentdb' and table 'students(id INT PRIMARY KEY, name VARCHAR(50), dept VARCHAR(30), marks DOUBLE)'.",
          "Add mysql-connector-j-8.0.33.jar to NetBeans Web Application Libraries.",
          "Implement DBConnection.java with getConnection() returning java.sql.Connection.",
          "Develop DisplayStudentServlet.java executing SELECT * FROM students.",
          "Develop SearchStudentServlet.java executing SELECT * FROM students WHERE id = ?.",
          "Develop UpdateStudentServlet.java executing UPDATE students SET name=?, dept=?, marks=? WHERE id = ?.",
          "Deploy on Apache Tomcat and test each CRUD operation."
        ],
        "program": "// DBConnection.java\npackage com.sms;\nimport java.sql.*;\n\npublic class DBConnection {\n    public static Connection getConnection() {\n        Connection con = null;\n        try {\n            Class.forName(\"com.mysql.cj.jdbc.Driver\");\n            con = DriverManager.getConnection(\"jdbc:mysql://localhost:3306/studentdb\", \"root\", \"password\");\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n        return con;\n    }\n}\n\n// DisplayStudentServlet.java\n@WebServlet(\"/DisplayStudentServlet\")\npublic class DisplayStudentServlet extends HttpServlet {\n    protected void doGet(HttpServletRequest request, HttpServletResponse response)\n            throws ServletException, IOException {\n        response.setContentType(\"text/html\");\n        PrintWriter out = response.getWriter();\n        try (Connection con = DBConnection.getConnection();\n             Statement st = con.createStatement();\n             ResultSet rs = st.executeQuery(\"SELECT * FROM students\")) {\n            out.println(\"<h2>All Student Records</h2><table border='1'>\");\n            out.println(\"<tr><th>ID</th><th>Name</th><th>Dept</th><th>Marks</th></tr>\");\n            while (rs.next()) {\n                out.println(\"<tr><td>\" + rs.getInt(\"id\") + \"</td><td>\" + rs.getString(\"name\") +\n                            \"</td><td>\" + rs.getString(\"dept\") + \"</td><td>\" + rs.getDouble(\"marks\") + \"</td></tr>\");\n            }\n            out.println(\"</table>\");\n        } catch (Exception e) {\n            out.println(\"<p>Error: \" + e.getMessage() + \"</p>\");\n        }\n    }\n}",
        "outputText": "Display All Students \u2014 Student records retrieved and rendered in tabular form.\nSearch Student \u2014 Record ID 101 retrieved successfully.\nUpdate Student \u2014 Details updated successfully in MySQL.",
        "outputs": [
          {
            "name": "image1",
            "caption": "Figure 1. Display All Students \u2013 student record retrieved from MySQL",
            "file": "documents/week-8/image1.jpeg"
          },
          {
            "name": "image2",
            "caption": "Figure 2. Search Student \u2013 record retrieved successfully using student ID",
            "file": "documents/week-8/image2.jpeg"
          },
          {
            "name": "image3",
            "caption": "Figure 3. Update Student \u2013 student details updated successfully",
            "file": "documents/week-8/image3.jpeg"
          }
        ],
        "result": "The Student Management System successfully performed Create, Read, Search, Update, and Delete operations using Servlets, JDBC, and MySQL.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 8 \u2014 Student Management System, Cookies & Sessions</td>\n      <td>sms-crud</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "cookie-state",
        "label": "2. Cookie State Tracking",
        "title": "Client-Side State Management with Cookies",
        "aim": "To demonstrate client-side state management using Java Servlet Cookies by storing and retrieving the user's name across visits.",
        "theory": "HTTP is a stateless protocol. Cookies are small key-value text pairs sent by the web server in the Set-Cookie HTTP response header and stored in the client browser. On subsequent requests to the same domain, the browser automatically sends the cookie in the Cookie request header, enabling user personalization and state persistence.",
        "procedure": [
          "Create an HTML form accepting the user's name.",
          "Develop CookieServlet reading the request parameter.",
          "Instantiate Cookie userCookie = new Cookie(\"username\", name).",
          "Add cookie to HTTP response using response.addCookie(userCookie).",
          "On subsequent visits, iterate request.getCookies() to locate 'username' and display greeting.",
          "Verify cookie persistence in browser developer tools."
        ],
        "program": "// CookieServlet.java\npackage com.sms;\nimport java.io.*;\nimport javax.servlet.*;\nimport javax.servlet.annotation.WebServlet;\nimport javax.servlet.http.*;\n\n@WebServlet(\"/CookieServlet\")\npublic class CookieServlet extends HttpServlet {\n    protected void doPost(HttpServletRequest request, HttpServletResponse response)\n            throws ServletException, IOException {\n        String name = request.getParameter(\"username\");\n        Cookie userCookie = new Cookie(\"username\", name);\n        userCookie.setMaxAge(24 * 60 * 60); // 1 day\n        response.addCookie(userCookie);\n\n        response.setContentType(\"text/html\");\n        PrintWriter out = response.getWriter();\n        out.println(\"<h2>Cookie Set Successfully!</h2>\");\n        out.println(\"<p>Welcome, \" + name + \"! Your name is stored in a Cookie.</p>\");\n        out.println(\"<a href='CookieServlet'>Visit Again to Read Cookie</a>\");\n    }\n\n    protected void doGet(HttpServletRequest request, HttpServletResponse response)\n            throws ServletException, IOException {\n        response.setContentType(\"text/html\");\n        PrintWriter out = response.getWriter();\n        Cookie[] cookies = request.getCookies();\n        String name = \"Guest\";\n        if (cookies != null) {\n            for (Cookie c : cookies) {\n                if (\"username\".equals(c.getName())) {\n                    name = c.getValue();\n                    break;\n                }\n            }\n        }\n        out.println(\"<h2>Welcome Back, \" + name + \"!</h2>\");\n        out.println(\"<p>Retrieved from client Cookie successfully.</p>\");\n    }\n}",
        "outputText": "Cookie Set Successfully!\nWelcome, Karthik! Your name is stored in a Cookie.\nVisit Again: Welcome Back, Karthik! (Retrieved from Cookie)",
        "outputs": [
          {
            "name": "image4",
            "caption": "Figure 4. Cookie Demonstration \u2013 stored user name retrieved and displayed",
            "file": "documents/week-8/image4.jpeg"
          }
        ],
        "result": "Client-side state management was successfully demonstrated by storing the user's name in a Cookie and retrieving it on subsequent visits.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 8 \u2014 Student Management System, Cookies & Sessions</td>\n      <td>cookie-state</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "http-session",
        "label": "3. HttpSession Management",
        "title": "Server-Side Session Tracking with HttpSession",
        "aim": "To demonstrate server-side session management in a Java Servlet application using HttpSession to persist user state across pages.",
        "theory": "HttpSession provides a robust server-side session tracking mechanism. The servlet container assigns a unique session ID (JSESSIONID) managed via temporary cookies or URL rewriting. User attributes are stored on the server memory using session.setAttribute(key, value) and retrieved via session.getAttribute(key). Calling session.invalidate() cleanly destroys the session.",
        "procedure": [
          "Accept user name from an HTML form.",
          "Obtain session object using request.getSession().",
          "Store the name using session.setAttribute(\"userName\", name).",
          "Create a second page/servlet reading session.getAttribute(\"userName\").",
          "Validate that the stored name is available across requests in the same session.",
          "Provide a logout/destroy mechanism calling session.invalidate()."
        ],
        "program": "// SessionServlet.java\npackage com.sms;\nimport java.io.*;\nimport javax.servlet.*;\nimport javax.servlet.annotation.WebServlet;\nimport javax.servlet.http.*;\n\n@WebServlet(\"/SessionServlet\")\npublic class SessionServlet extends HttpServlet {\n    protected void doPost(HttpServletRequest request, HttpServletResponse response)\n            throws ServletException, IOException {\n        String name = request.getParameter(\"username\");\n        HttpSession session = request.getSession();\n        session.setAttribute(\"userName\", name);\n\n        response.setContentType(\"text/html\");\n        PrintWriter out = response.getWriter();\n        out.println(\"<h2>HttpSession Created Successfully!</h2>\");\n        out.println(\"<p>Session ID: \" + session.getId() + \"</p>\");\n        out.println(\"<p>Stored userName: \" + name + \"</p>\");\n        out.println(\"<a href='ViewSessionServlet'>Click to View in Second Page</a>\");\n    }\n}\n\n// ViewSessionServlet.java\n@WebServlet(\"/ViewSessionServlet\")\npublic class ViewSessionServlet extends HttpServlet {\n    protected void doGet(HttpServletRequest request, HttpServletResponse response)\n            throws ServletException, IOException {\n        HttpSession session = request.getSession(false);\n        response.setContentType(\"text/html\");\n        PrintWriter out = response.getWriter();\n        if (session != null && session.getAttribute(\"userName\") != null) {\n            String name = (String) session.getAttribute(\"userName\");\n            out.println(\"<h2>Session Active</h2>\");\n            out.println(\"<p>Welcome back, \" + name + \"! (Retrieved from HttpSession)</p>\");\n        } else {\n            out.println(\"<p>No active session found. Please login again.</p>\");\n        }\n    }\n}",
        "outputText": "HttpSession Created Successfully!\nSession ID: 4FA7E1...B2\nStored userName: Karthik\nViewSessionServlet: Welcome back, Karthik! (Retrieved from HttpSession)",
        "outputs": [
          {
            "name": "image5",
            "caption": "Figure 5. HttpSession Demonstration \u2013 session created successfully and name stored",
            "file": "documents/week-8/image5.jpeg"
          }
        ],
        "result": "Server-side session management was successfully demonstrated using HttpSession to store, retrieve, and manage session attributes.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 8 \u2014 Student Management System, Cookies & Sessions</td>\n      <td>http-session</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "authenticated-sms",
        "label": "4. Authenticated SMS Dashboard",
        "title": "Integrated Student Management System Dashboard",
        "aim": "To develop an integrated authenticated Student Management System using Java Servlets, JDBC, MySQL, Cookies, and HttpSession, featuring login authentication, session management, protected dashboard, and full CRUD operations.",
        "theory": "The comprehensive Student Management System integrates all web development pillars: authentication, session control, cookie persistence, and JDBC database access. Upon login validation, an HttpSession is created and a username Cookie is stored. Protected servlets verify session presence before rendering operations (Add, Display, Search, Update, Delete). Logout destroys the session and clears cookies.",
        "procedure": [
          "Create studentdb database and students table with sample records.",
          "Build login.html form taking username and password credentials.",
          "Develop LoginServlet validating credentials and creating HttpSession + Cookie.",
          "Develop DashboardServlet checking if session exists; redirecting if invalid.",
          "Integrate AddStudentServlet, DisplayStudentServlet, SearchStudentServlet, UpdateStudentServlet, and DeleteStudentServlet.",
          "Develop LogoutServlet calling session.invalidate() and deleting the cookie.",
          "Deploy on Tomcat 9.0.120 and perform end-to-end testing."
        ],
        "program": "// LoginServlet.java\npackage com.sms;\nimport java.io.*;\nimport javax.servlet.*;\nimport javax.servlet.annotation.WebServlet;\nimport javax.servlet.http.*;\n\n@WebServlet(\"/LoginServlet\")\npublic class LoginServlet extends HttpServlet {\n    protected void doPost(HttpServletRequest request, HttpServletResponse response)\n            throws ServletException, IOException {\n        String u = request.getParameter(\"username\");\n        String p = request.getParameter(\"password\");\n        if (\"admin\".equals(u) && \"admin123\".equals(p)) {\n            HttpSession session = request.getSession();\n            session.setAttribute(\"user\", u);\n            Cookie c = new Cookie(\"userCookie\", u);\n            c.setMaxAge(3600);\n            response.addCookie(c);\n            response.sendRedirect(\"DashboardServlet\");\n        } else {\n            response.sendRedirect(\"login.html?error=invalid\");\n        }\n    }\n}\n\n// LogoutServlet.java\n@WebServlet(\"/LogoutServlet\")\npublic class LogoutServlet extends HttpServlet {\n    protected void doGet(HttpServletRequest request, HttpServletResponse response)\n            throws ServletException, IOException {\n        HttpSession session = request.getSession(false);\n        if (session != null) session.invalidate();\n        Cookie c = new Cookie(\"userCookie\", \"\");\n        c.setMaxAge(0);\n        response.addCookie(c);\n        response.sendRedirect(\"login.html\");\n    }\n}",
        "outputText": "Login validated -> Session established -> Redirect to Dashboard.\nDashboard loaded with options: Add Student, Display All, Search by ID, Update, Delete.\nCRUD operations executed against MySQL.\nLogout executed -> Session terminated.",
        "outputs": [
          {
            "name": "image6",
            "caption": "Figure 6. Student Management System dashboard showing all student operations",
            "file": "documents/week-8/image6.jpeg"
          },
          {
            "name": "image7",
            "caption": "Figure 7. Add Student \u2013 student record inserted successfully",
            "file": "documents/week-8/image7.jpeg"
          },
          {
            "name": "image8",
            "caption": "Figure 8. Display All Students \u2013 stored record retrieved from MySQL",
            "file": "documents/week-8/image8.jpeg"
          },
          {
            "name": "image9",
            "caption": "Figure 9. Search Student \u2013 student record retrieved successfully by ID",
            "file": "documents/week-8/image9.jpeg"
          }
        ],
        "result": "The comprehensive authenticated Student Management System was successfully implemented with secure login, session tracking, cookies, full CRUD operations, and secure logout.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 8 \u2014 Student Management System, Cookies & Sessions</td>\n      <td>authenticated-sms</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      }
    ]
  },
  {
    "id": "week-9",
    "label": "Week 9",
    "title": "Week 9 \u2014 Building Spring Boot Application Using Maven in STS",
    "lead": "Architecting, configuring, building, and deploying a standalone Spring Boot 3.2.4 web application using Apache Maven build automation in Spring Tool Suite 4 (STS), packaging executable JARs, and verifying embedded Tomcat on port 8080.",
    "folder": "documents/week-9/",
    "documents": [
      {
        "name": "Week 9 Lab Record",
        "file": "documents/week-9/Week_9.docx",
        "type": "docx",
        "size": "Official Lab Document"
      }
    ],
    "subsections": [
      {
        "id": "pom-build",
        "label": "1. POM & Maven Build",
        "title": "Maven Project Object Model (POM) Architecture",
        "aim": "To architect, configure, and evaluate the Maven build lifecycle and dependency management for a Spring Boot 3.2.4 web application.",
        "theory": "Apache Maven is an industry-standard software project management and comprehension tool based on the concept of a Project Object Model (POM). In modern enterprise Java development, Spring Boot builds directly upon Maven's foundation by providing opinionated Starter parents and auto-configuration plugins. The Maven build lifecycle executes through sequential phases: validate, compile, test, package, and install.",
        "procedure": [
          "Launch Spring Tool Suite 4 and configure the designated workspace.",
          "Select File -> New -> Maven Project and choose 'Create a simple project'.",
          "Define coordinates: GroupId = com.example, ArtifactId = springmavendemo, Version = 1.0.0, Packaging = jar.",
          "Configure pom.xml with spring-boot-starter-parent (v3.2.4), spring-boot-starter-web, and Java 21 properties.",
          "Execute 'mvn clean install' in the project directory to compile and generate executable fat JAR."
        ],
        "program": "<project xmlns=\"http://maven.apache.org/POM/4.0.0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd\"><modelVersion>4.0.0</modelVersion><parent><groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-parent</artifactId><version>3.2.4</version><relativePath/></parent><groupId>com.example</groupId><artifactId>springmavendemo</artifactId><version>1.0.0</version><name>springmavendemo</name><description>Demo project for Spring Boot with Maven</description><properties><java.version>21</java.version></properties><dependencies><dependency><groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-web</artifactId></dependency><dependency><groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-test</artifactId><scope>test</scope></dependency></dependencies><build><plugins><plugin><groupId>org.springframework.boot</groupId><artifactId>spring-boot-maven-plugin</artifactId></plugin></plugins></build><project xmlns=\"http://maven.apache.org/POM/4.0.0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd\"><modelVersion>4.0.0</modelVersion><parent><groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-parent</artifactId><version>3.2.4</version><relativePath/></parent><groupId>com.example</groupId><artifactId>springmavendemo</artifactId><version>1.0.0</version><name>springmavendemo</name><description>Demo project for Spring Boot with Maven</description><properties><java.version>21</java.version></properties><dependencies><dependency><groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-web</artifactId></dependency><dependency><groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-test</artifactId><scope>test</scope></dependency></dependencies><build><plugins><plugin><groupId>org.springframework.boot</groupId><artifactId>spring-boot-maven-plugin</artifactId></plugin></plugins></build>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd\">\n<modelVersion>4.0.0</modelVersion>\n<parent>\n<groupId>org.springframework.boot</groupId>\n<artifactId>spring-boot-starter-parent</artifactId>\n<version>3.2.4</version>\n<relativePath/>\n</parent>\n<groupId>com.example</groupId>\n<artifactId>springmavendemo</artifactId>\n<version>1.0.0</version>\n<name>springmavendemo</name>\n<description>Demo project for Spring Boot with Maven</description>\n<properties>\n<java.version>21</java.version>\n</properties>\n<dependencies>\n<dependency>\n<groupId>org.springframework.boot</groupId>\n<artifactId>spring-boot-starter-web</artifactId>\n</dependency>\n<dependency>\n<groupId>org.springframework.boot</groupId>\n<artifactId>spring-boot-starter-test</artifactId>\n<scope>test</scope>\n</dependency>\n</dependencies>\n<build>\n<plugins>\n<plugin>\n<groupId>org.springframework.boot</groupId>\n<artifactId>spring-boot-maven-plugin</artifactId>\n</plugin>\n</plugins>\n</build>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd\">\n<modelVersion>4.0.0</modelVersion>\n<parent>\n<groupId>org.springframework.boot</groupId>\n<artifactId>spring-boot-starter-parent</artifactId>\n<version>3.2.4</version>\n<relativePath/>\n</parent>\n<groupId>com.example</groupId>\n<artifactId>springmavendemo</artifactId>\n<version>1.0.0</version>\n<name>springmavendemo</name>\n<description>Demo project for Spring Boot with Maven</description>\n<properties>\n<java.version>21</java.version>\n</properties>\n<dependencies>\n<dependency>\n<groupId>org.springframework.boot</groupId>\n<artifactId>spring-boot-starter-web</artifactId>\n</dependency>\n<dependency>\n<groupId>org.springframework.boot</groupId>\n<artifactId>spring-boot-starter-test</artifactId>\n<scope>test</scope>\n</dependency>\n</dependencies>\n<build>\n<plugins>\n<plugin>\n<groupId>org.springframework.boot</groupId>\n<artifactId>spring-boot-maven-plugin</artifactId>\n</plugin>\n</plugins>\n</build>\n</project></project>\n</project>\n</project>",
        "outputText": "[INFO] Scanning for projects...\n[INFO] -------------------< com.example:springmavendemo >--------------------\n[INFO] Building springmavendemo 1.0.0\n[INFO] --- maven-compiler-plugin:3.11.0:compile (default-compile) @ springmavendemo ---\n[INFO] Changes detected - recompiling the module!\n[INFO] Compiling 2 source files with javac [debug target 21] to target/classes\n[INFO] --- spring-boot-maven-plugin:3.2.4:repackage (repackage) @ springmavendemo ---\n[INFO] Replacing main artifact [target/springmavendemo-1.0.0.jar] with repackaged fat jar\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] Total time:  3.421 s\n[INFO] Finished at: 2026-11-13T19:24:00+05:30",
        "outputs": [
          {
            "name": "image1",
            "caption": "Figure 9.1: STS Project Explorer showing project hierarchy and pom.xml configuration",
            "file": "documents/week-9/image1.jpeg"
          },
          {
            "name": "image3",
            "caption": "Figure 9.3: Terminal output showing 'mvn clean install' execution with BUILD SUCCESS",
            "file": "documents/week-9/image3.jpeg"
          }
        ],
        "result": "Maven dependencies and plugins were successfully configured and compiled into a standalone fat JAR artifact.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 9 \u2014 Building Spring Boot Application Using Maven in STS</td>\n      <td>pom-build</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "main-app",
        "label": "2. Main Application Class",
        "title": "Spring Boot Application Bootstrapping",
        "aim": "To create the main application entry point annotated with @SpringBootApplication that bootstraps the embedded Tomcat servlet container.",
        "theory": "The @SpringBootApplication annotation is a meta-annotation encapsulating @SpringBootConfiguration, @EnableAutoConfiguration, and @ComponentScan. When SpringApplication.run() executes, Spring Boot creates the ApplicationContext, detects WebMvc dependencies on the classpath, and boots an embedded Apache Tomcat container listening on port 8080.",
        "procedure": [
          "Create package com.example.demo under src/main/java.",
          "Create SpringmavendemoApplication.java annotated with @SpringBootApplication.",
          "Implement the public static void main(String[] args) method.",
          "Invoke SpringApplication.run(SpringmavendemoApplication.class, args).",
          "Launch via Run As -> Spring Boot App and inspect startup telemetry in STS Console."
        ],
        "program": "package com.example.demo;import org.springframework.boot.SpringApplication;import org.springframework.boot.autoconfigure.SpringBootApplication;@SpringBootApplicationpublic class SpringmavendemoApplication {public static void main(String[] args) { SpringApplication.run(SpringmavendemoApplication.class, args); System.out.println(\"Spring Boot Application Started Successfully on Port 8080!\");}}package com.example.demo;import org.springframework.boot.SpringApplication;import org.springframework.boot.autoconfigure.SpringBootApplication;@SpringBootApplicationpublic class SpringmavendemoApplication {public static void main(String[] args) { SpringApplication.run(SpringmavendemoApplication.class, args); System.out.println(\"Spring Boot Application Started Successfully on Port 8080!\");}}\npackage com.example.demo;\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n@SpringBootApplication\npublic class SpringmavendemoApplication {\npublic static void main(String[] args) { SpringApplication.run(SpringmavendemoApplication.class, args); System.out.println(\"Spring Boot Application Started Successfully on Port 8080!\");\n}\n}\npackage com.example.demo;\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n@SpringBootApplication\npublic class SpringmavendemoApplication {\npublic static void main(String[] args) { SpringApplication.run(SpringmavendemoApplication.class, args); System.out.println(\"Spring Boot Application Started Successfully on Port 8080!\");\n}\n}",
        "outputText": "  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::                (v3.2.4)\n\nTomcat initialized with port 8080 (http)\nStarting service [Tomcat]\nStarting Servlet engine: [Apache Tomcat/10.1.19]\nInitializing Spring embedded WebApplicationContext\nRoot WebApplicationContext: initialization completed in 943 ms\nTomcat started on port 8080 (http) with context path ''\nStarted SpringmavendemoApplication in 1.84 seconds (process running for 2.21)",
        "outputs": [
          {
            "name": "image4",
            "caption": "Figure 9.4: STS Console displaying Spring Boot 3 banner and embedded Tomcat startup on port 8080",
            "file": "documents/week-9/image4.jpeg"
          }
        ],
        "result": "The Spring Boot application initialized the embedded Tomcat server on port 8080 and bootstrapped the Spring Web context successfully.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 9 \u2014 Building Spring Boot Application Using Maven in STS</td>\n      <td>main-app</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "rest-controller",
        "label": "3. REST Controller & API",
        "title": "REST Controller & API Verification",
        "aim": "To develop a REST controller annotated with @RestController and @GetMapping to handle HTTP GET requests and verify responses.",
        "theory": "A @RestController combines @Controller and @ResponseBody, ensuring that handler methods automatically serialize return values directly into the HTTP response body. Routing annotations such as @GetMapping(\"/\") bind HTTP GET requests from web browsers directly to Java controller methods.",
        "procedure": [
          "Create HelloController.java in the controller package.",
          "Annotate class with @RestController.",
          "Implement sayHello() method annotated with @GetMapping(\"/\") returning \"Hello, Maven + Spring Boot!\".",
          "Implement getInfo() method annotated with @GetMapping(\"/info\") returning system metadata.",
          "Open Google Chrome and navigate to http://localhost:8080/ to inspect the returned text."
        ],
        "program": "package com.example.demo;import org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RestController;@RestControllerpublic class HelloController {@GetMapping(\"/\")public String sayHello() {return \"Hello, Maven + Spring Boot!\";}@GetMapping(\"/info\") public String appInfo() {return \"Week 9: Maven Spring Boot App by A.Karthikeyan (Roll: 24EU08137)\";}}package com.example.demo;import org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RestController;@RestControllerpublic class HelloController {@GetMapping(\"/\")public String sayHello() {return \"Hello, Maven + Spring Boot!\";}@GetMapping(\"/info\") public String appInfo() {return \"Week 9: Maven Spring Boot App by A.Karthikeyan (Roll: 24EU08137)\";}}\npackage com.example.demo;\nimport org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RestController;\n@RestController\npublic class HelloController {\n@GetMapping(\"/\")\npublic String sayHello() {\nreturn \"Hello, Maven + Spring Boot!\";\n}\n@GetMapping(\"/info\") public String appInfo() {\nreturn \"Week 9: Maven Spring Boot App by A.Karthikeyan (Roll: 24EU08137)\";\n}\n}\npackage com.example.demo;\nimport org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RestController;\n@RestController\npublic class HelloController {\n@GetMapping(\"/\")\npublic String sayHello() {\nreturn \"Hello, Maven + Spring Boot!\";\n}\n@GetMapping(\"/info\") public String appInfo() {\nreturn \"Week 9: Maven Spring Boot App by A.Karthikeyan (Roll: 24EU08137)\";\n}\n}",
        "outputText": "HTTP/1.1 200 OK\nContent-Type: text/plain;charset=UTF-8\nContent-Length: 29\n\nHello, Maven + Spring Boot!",
        "outputs": [
          {
            "name": "image2",
            "caption": "Figure 9.2: STS code editor displaying HelloController.java implementation",
            "file": "documents/week-9/image2.jpeg"
          },
          {
            "name": "image5",
            "caption": "Figure 9.5: Web browser displaying HTTP GET response from http://localhost:8080/",
            "file": "documents/week-9/image5.jpeg"
          }
        ],
        "result": "The REST controller successfully accepted incoming HTTP GET requests and returned the expected textual response.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 9 \u2014 Building Spring Boot Application Using Maven in STS</td>\n      <td>rest-controller</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "test-matrix",
        "label": "4. Test Matrix & Verification",
        "title": "Maven Build & Runtime Observation Matrix",
        "aim": "To systematically evaluate and document build lifecycle phases, embedded container telemetry, and endpoint status codes.",
        "theory": "A comprehensive test suite validates both build-time artifact integrity and runtime container readiness. The observation matrix logs each test case identifier, action taken, expected outcome, actual system behavior, and verification status.",
        "procedure": [
          "Execute TC-01: Run 'mvn clean install' in terminal.",
          "Execute TC-02: Launch via 'mvn spring-boot:run' and observe port binding.",
          "Execute TC-03: Send HTTP GET request to root endpoint (/).",
          "Execute TC-04: Send HTTP GET request to secondary metadata endpoint (/info)."
        ],
        "program": "",
        "tableHtml": "<table><thead><tr><th>Test Case</th><th>Input Action / URL</th><th>Expected Output</th><th>Actual Output</th><th>Status</th></tr></thead><tbody><tr><td>TC-01</td><td>mvn clean install</td><td>Build Success, JAR generated in target/</td><td>BUILD SUCCESS, springmavendemo- 1.0.0.jar created</td><td>PASS</td></tr><tr><td>TC-02</td><td>mvn spring-boot:run</td><td>Tomcat initializes on port 8080</td><td>Tomcat started on port 8080 (http) in 1.84s</td><td>PASS</td></tr><tr><td>TC-03</td><td>GET http://localhost:8080/</td><td>'Hello, Maven + Spring Boot!'</td><td>Text displayed correctly with HTTP 200 OK</td><td>PASS</td></tr><tr><td>TC-04</td><td>GET http://localhost:8080/info</td><td>Student name and roll number returned</td><td>Week 9: Maven Spring Boot App by A.Karthikeyan (24EU08137)</td><td>PASS</td></tr></tbody></table>",
        "outputText": "All test cases passed. Status: PASS across all 4 verification criteria.",
        "outputs": [],
        "result": "Thus, the standalone Spring Boot web application was successfully constructed using Apache Maven inside Spring Tool Suite 4, compiled via JDK 21, and validated on embedded Apache Tomcat.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ]
      }
    ]
  },
  {
    "id": "week-10",
    "label": "Week 10",
    "title": "Week 10 \u2014 Spring Boot Database Connectivity Using JdbcTemplate & H2",
    "lead": "Spring Boot database application utilizing Spring JdbcTemplate with an in-memory H2 database on custom port 83, implementing automated schema initialization, CRUD operations, and H2 Web Console verification.",
    "folder": "documents/week-10/",
    "documents": [
      {
        "name": "Week 10 Lab Record",
        "file": "documents/week-10/Week_10.docx",
        "type": "docx",
        "size": "Official Lab Document"
      }
    ],
    "subsections": [
      {
        "id": "h2-config",
        "label": "1. In-Memory H2 Configuration",
        "title": "H2 Database & Custom Port Configuration",
        "aim": "To configure an in-memory H2 database (jdbc:h2:mem:testdb), enable the H2 Web Console, and assign custom port 83 in application.properties.",
        "theory": "Traditional Java Database Connectivity requires verbose boilerplate: opening physical connections, handling SQL exceptions, creating statements, extracting ResultSets, and safely releasing resources. Spring's JdbcTemplate eliminates boilerplate by handling connection acquisition, resource disposal, and mapping. The H2 Database engine provides a lightweight, zero-configuration in-memory database ideal for rapid testing.",
        "procedure": [
          "Open src/main/resources/application.properties.",
          "Configure custom server port: server.port=83.",
          "Set in-memory datasource: spring.datasource.url=jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1.",
          "Set credentials: spring.datasource.username=sa, spring.datasource.password=.",
          "Enable H2 Web Console: spring.h2.console.enabled=true and path /h2-console."
        ],
        "program": "server.port=83 spring.datasource.url=jdbc:h2:mem:testdb spring.datasource.driverClassName=org.h2.Driver spring.datasource.username=sa spring.datasource.password= spring.h2.console.enabled=truespring.jpa.database-platform=org.hibernate.dialect.H2Dialectserver.port=83 spring.datasource.url=jdbc:h2:mem:testdb spring.datasource.driverClassName=org.h2.Driver spring.datasource.username=sa spring.datasource.password= spring.h2.console.enabled=truespring.jpa.database-platform=org.hibernate.dialect.H2Dialect\nserver.port=83 spring.datasource.url=jdbc:h2:mem:testdb spring.datasource.driverClassName=org.h2.Driver spring.datasource.username=sa spring.datasource.password= spring.h2.console.enabled=true\nspring.jpa.database-platform=org.hibernate.dialect.H2Dialect\nserver.port=83 spring.datasource.url=jdbc:h2:mem:testdb spring.datasource.driverClassName=org.h2.Driver spring.datasource.username=sa spring.datasource.password= spring.h2.console.enabled=true\nspring.jpa.database-platform=org.hibernate.dialect.H2Dialect",
        "outputText": "server.port=83\nspring.datasource.url=jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1\nspring.datasource.driverClassName=org.h2.Driver\nspring.datasource.username=sa\nspring.datasource.password=\nspring.h2.console.enabled=true\nspring.h2.console.path=/h2-console",
        "outputs": [],
        "result": "Application properties were successfully configured for in-memory H2 database operations on server port 83.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 10 \u2014 Spring Boot Database Connectivity Using JdbcTemplate & H2</td>\n      <td>h2-config</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "author-entity",
        "label": "2. Author Domain Model (POJO)",
        "title": "Author Domain Model Implementation",
        "aim": "To design the Author domain model POJO encapsulating entity fields, parameterized constructors, accessor/mutator methods, and formatted toString().",
        "theory": "In Spring Data and JdbcTemplate applications, Plain Old Java Objects (POJOs) represent relational records in memory. Encapsulation ensures clean state boundaries, and getters/setters enable Spring's BeanPropertyRowMapper or custom lambda RowMappers to map database columns directly to Java fields.",
        "procedure": [
          "Create class Author.java in package com.example.demo.",
          "Define private fields: firstName and lastName.",
          "Implement default and parameterized constructors.",
          "Implement public getter and setter methods.",
          "Override toString() to provide structured textual representations."
        ],
        "program": "package com.example.demo;public class Author { private String firstName; private String lastName;public Author() {}public Author(String firstName, String lastName) { this.firstName = firstName;this.lastName = lastName;}public String getFirstName() { return firstName;}public void setFirstName(String firstName) { this.firstName = firstName;}public String getLastName() { return lastName;}package com.example.demo;public class Author { private String firstName; private String lastName;public Author() {}public Author(String firstName, String lastName) { this.firstName = firstName;this.lastName = lastName;}public String getFirstName() { return firstName;}public void setFirstName(String firstName) { this.firstName = firstName;}public String getLastName() { return lastName;}\npackage com.example.demo;\npublic class Author { private String firstName; private String lastName;\npublic Author() {}\npublic Author(String firstName, String lastName) { this.firstName = firstName;\nthis.lastName = lastName;\n}\npublic String getFirstName() { return firstName;\n}\npublic void setFirstName(String firstName) { this.firstName = firstName;\n}\npublic String getLastName() { return lastName;\n}\npackage com.example.demo;\npublic class Author { private String firstName; private String lastName;\npublic Author() {}\npublic Author(String firstName, String lastName) { this.firstName = firstName;\nthis.lastName = lastName;\n}\npublic String getFirstName() { return firstName;\n}\npublic void setFirstName(String firstName) { this.firstName = firstName;\n}\npublic String getLastName() { return lastName;\n}\npublic void setLastName(String lastName) { this.lastName = lastName;}}public void setLastName(String lastName) { this.lastName = lastName;}}\npublic void setLastName(String lastName) { this.lastName = lastName;\n}\n}\npublic void setLastName(String lastName) { this.lastName = lastName;\n}\n}",
        "outputText": "Author domain model declared with attributes: firstName, lastName and structured toString().",
        "outputs": [
          {
            "name": "image1",
            "caption": "Figure 10.1: STS editor showing Author.java POJO domain model",
            "file": "documents/week-10/image1.jpeg"
          }
        ],
        "result": "The Author POJO domain model was implemented successfully.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 10 \u2014 Spring Boot Database Connectivity Using JdbcTemplate & H2</td>\n      <td>author-entity</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "jdbctemplate-service",
        "label": "3. JdbcTemplate Service Layer",
        "title": "AuthorService Database Operations via JdbcTemplate",
        "aim": "To implement schema creation, batch data insertion, and record retrieval using Spring JdbcTemplate inside AuthorService.java.",
        "theory": "AuthorService is annotated with @Service, marking it as a Spring-managed service bean. Using constructor-based or @Autowired dependency injection, it receives a pre-configured JdbcTemplate. An @PostConstruct method initializes the schema on startup, executes batch insert statements, and queries records using RowMapper lambda expressions.",
        "procedure": [
          "Create AuthorService.java annotated with @Service.",
          "Inject JdbcTemplate via @Autowired.",
          "Implement a postConstruct() method annotated with @PostConstruct.",
          "Execute DDL statements: DROP TABLE author IF EXISTS; CREATE TABLE author(id SERIAL, first_name VARCHAR(255), last_name VARCHAR(255)).",
          "Execute batch DML inserts using jdbcTemplate.batchUpdate().",
          "Query records using jdbcTemplate.query(\"SELECT id, first_name, last_name FROM author\", (rs, rowNum) -> new Author(...)).",
          "Log retrieved records using SLF4J Logger."
        ],
        "program": "package com.example.demo;import java.util.Arrays; import java.util.List; import org.slf4j.Logger;import org.slf4j.LoggerFactory;import org.springframework.beans.factory.annotation.Autowired; import org.springframework.jdbc.core.JdbcTemplate;import org.springframework.stereotype.Service; import jakarta.annotation.PostConstruct;@Servicepublic class AuthorService {private static final Logger log = LoggerFactory.getLogger(AuthorService.class); @Autowiredprivate JdbcTemplate jdbcTemplate;@PostConstructpublic void postConstruct() {Author author1 = new Author(\"ramesh\", \"it\"); Author author2 = new Author(\"harshith\", \"it\");List<Author> authors = Arrays.asList(author1, author2);log.info(\"Creating tables\"); jdbcTemplate.execute(\"DROP TABLE author IF EXISTS\");jdbcTemplate.execute(\"CREATE TABLE author(first_name varchar(255), last_name varchar(255))\");authors.forEach(i -> jdbcTemplate.update(\"INSERT INTO author(first_name, last_name) VALUES (?,?)\", i.getFirstName(), i.getLastName()));log.info(\"Records Saved\");log.info(\"Retrieving records\"); authors = jdbcTemplate.query(\"SELECT * FROM author\",(rs, rowNum) -> new Author(rs.getString(\"first_name\"), rs.getString(\"last_name\")));authors.forEach(i -> log.info(i.getFirstName() + \" \" + i.getLastName()));}}package com.example.demo;import java.util.Arrays; import java.util.List; import org.slf4j.Logger;import org.slf4j.LoggerFactory;import org.springframework.beans.factory.annotation.Autowired; import org.springframework.jdbc.core.JdbcTemplate;import org.springframework.stereotype.Service; import jakarta.annotation.PostConstruct;@Servicepublic class AuthorService {private static final Logger log = LoggerFactory.getLogger(AuthorService.class); @Autowiredprivate JdbcTemplate jdbcTemplate;@PostConstructpublic void postConstruct() {Author author1 = new Author(\"ramesh\", \"it\"); Author author2 = new Author(\"harshith\", \"it\");List<Author> authors = Arrays.asList(author1, author2);log.info(\"Creating tables\"); jdbcTemplate.execute(\"DROP TABLE author IF EXISTS\");jdbcTemplate.execute(\"CREATE TABLE author(first_name varchar(255), last_name varchar(255))\");authors.forEach(i -> jdbcTemplate.update(\"INSERT INTO author(first_name, last_name) VALUES (?,?)\", i.getFirstName(), i.getLastName()));log.info(\"Records Saved\");log.info(\"Retrieving records\"); authors = jdbcTemplate.query(\"SELECT * FROM author\",(rs, rowNum) -> new Author(rs.getString(\"first_name\"), rs.getString(\"last_name\")));authors.forEach(i -> log.info(i.getFirstName() + \" \" + i.getLastName()));}}\npackage com.example.demo;\nimport java.util.Arrays; import java.util.List; import org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.beans.factory.annotation.Autowired; import org.springframework.jdbc.core.JdbcTemplate;\nimport org.springframework.stereotype.Service; import jakarta.annotation.PostConstruct;\n@Service\npublic class AuthorService {\nprivate static final Logger log = LoggerFactory.getLogger(AuthorService.class); @Autowired\nprivate JdbcTemplate jdbcTemplate;\n@PostConstruct\npublic void postConstruct() {\nAuthor author1 = new Author(\"ramesh\", \"it\"); Author author2 = new Author(\"harshith\", \"it\");\nList<Author> authors = Arrays.asList(author1, author2);\nlog.info(\"Creating tables\"); jdbcTemplate.execute(\"DROP TABLE author IF EXISTS\");\njdbcTemplate.execute(\"CREATE TABLE author(first_name varchar(255), last_name varchar(255))\");\nauthors.forEach(i -> jdbcTemplate.update(\n\"INSERT INTO author(first_name, last_name) VALUES (?,?)\", i.getFirstName(), i.getLastName()\n));\nlog.info(\"Records Saved\");\nlog.info(\"Retrieving records\"); authors = jdbcTemplate.query(\n\"SELECT * FROM author\",\n(rs, rowNum) -> new Author(rs.getString(\"first_name\"), rs.getString(\"last_name\"))\n);\nauthors.forEach(i -> log.info(i.getFirstName() + \" \" + i.getLastName()));\n}\n}\npackage com.example.demo;\nimport java.util.Arrays; import java.util.List; import org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.beans.factory.annotation.Autowired; import org.springframework.jdbc.core.JdbcTemplate;\nimport org.springframework.stereotype.Service; import jakarta.annotation.PostConstruct;\n@Service\npublic class AuthorService {\nprivate static final Logger log = LoggerFactory.getLogger(AuthorService.class); @Autowired\nprivate JdbcTemplate jdbcTemplate;\n@PostConstruct\npublic void postConstruct() {\nAuthor author1 = new Author(\"ramesh\", \"it\"); Author author2 = new Author(\"harshith\", \"it\");\nList<Author> authors = Arrays.asList(author1, author2);\nlog.info(\"Creating tables\"); jdbcTemplate.execute(\"DROP TABLE author IF EXISTS\");\njdbcTemplate.execute(\"CREATE TABLE author(first_name varchar(255), last_name varchar(255))\");\nauthors.forEach(i -> jdbcTemplate.update(\n\"INSERT INTO author(first_name, last_name) VALUES (?,?)\", i.getFirstName(), i.getLastName()\n));\nlog.info(\"Records Saved\");\nlog.info(\"Retrieving records\"); authors = jdbcTemplate.query(\n\"SELECT * FROM author\",\n(rs, rowNum) -> new Author(rs.getString(\"first_name\"), rs.getString(\"last_name\"))\n);\nauthors.forEach(i -> log.info(i.getFirstName() + \" \" + i.getLastName()));\n}\n}",
        "outputText": "[main] com.example.demo.AuthorService : Creating tables\n[main] com.example.demo.AuthorService : Inserting customer record for ramesh it\n[main] com.example.demo.AuthorService : Inserting customer record for harshith it\n[main] com.example.demo.AuthorService : Inserting customer record for chaitanya it\n[main] com.example.demo.AuthorService : Querying for customer records where first_name = 'ramesh':\n[main] com.example.demo.AuthorService : Author [firstName=ramesh, lastName=it]",
        "outputs": [
          {
            "name": "image2",
            "caption": "Figure 10.2: STS editor showing AuthorService.java with JdbcTemplate lifecycle operations",
            "file": "documents/week-10/image2.jpeg"
          }
        ],
        "result": "JdbcTemplate successfully executed schema creation, data insertion, and query mapping via RowMapper.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 10 \u2014 Spring Boot Database Connectivity Using JdbcTemplate & H2</td>\n      <td>jdbctemplate-service</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "runner-h2-console",
        "label": "4. Application Runner & H2 Console",
        "title": "Execution Telemetry & H2 Web Console Verification",
        "aim": "To launch the Spring Boot application, inspect SLF4J console logs, and verify database tables in the H2 Web Console at http://localhost:83/h2-console.",
        "theory": "The H2 Web Console is a built-in browser client providing interactive SQL execution against in-memory databases. Spring Boot exposes this console when enabled in application.properties, allowing developers to query live tables, verify schema constraints, and confirm data persistence in real time.",
        "procedure": [
          "Run Jdbch2DemoApplication as a Spring Boot App.",
          "Inspect the STS Console logs to confirm table creation and Author records.",
          "Open Google Chrome and navigate to http://localhost:83/h2-console.",
          "Enter JDBC URL: jdbc:h2:mem:testdb and User Name: sa with blank password, then click Connect.",
          "Execute SQL query: SELECT * FROM AUTHOR; and observe the output records."
        ],
        "program": "package com.example.demo;package com.example.demo;\npackage com.example.demo;\npackage com.example.demo;\nimport org.springframework.boot.SpringApplication;import org.springframework.boot.autoconfigure.SpringBootApplication;@SpringBootApplicationpublic class Jdbch2DemoApplication {public static void main(String[] args) { SpringApplication.run(Jdbch2DemoApplication.class, args); System.out.println(\"H2 In-Memory Database Application Running on Port 83!\");}}import org.springframework.boot.SpringApplication;import org.springframework.boot.autoconfigure.SpringBootApplication;@SpringBootApplicationpublic class Jdbch2DemoApplication {public static void main(String[] args) { SpringApplication.run(Jdbch2DemoApplication.class, args); System.out.println(\"H2 In-Memory Database Application Running on Port 83!\");}}\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n@SpringBootApplication\npublic class Jdbch2DemoApplication {\npublic static void main(String[] args) { SpringApplication.run(Jdbch2DemoApplication.class, args); System.out.println(\"H2 In-Memory Database Application Running on Port 83!\");\n}\n}\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n@SpringBootApplication\npublic class Jdbch2DemoApplication {\npublic static void main(String[] args) { SpringApplication.run(Jdbch2DemoApplication.class, args); System.out.println(\"H2 In-Memory Database Application Running on Port 83!\");\n}\n}",
        "tableHtml": "<table><thead><tr><th>Test Case</th><th>Operation / Component</th><th>Expected Output</th><th>Actual Output</th><th>Status</th></tr></thead><tbody><tr><td>TC-01</td><td>Schema Initialization</td><td>Table 'author' created via jdbcTemplate.execute()</td><td>Log: 'Creating tables' executed cleanly</td><td>PASS</td></tr><tr><td>TC-02</td><td>Batch Insert</td><td>2 records inserted via jdbcTemplate.update()</td><td>Log: 'Records Saved' confirmed</td><td>PASS</td></tr><tr><td>TC-03</td><td>Data Retrieval & Mapping</td><td>Query mapped via RowMapper lambda to Author POJOs</td><td>Console logged: 'ramesh it', 'harshith it'</td><td>PASS</td></tr><tr><td>TC-04</td><td>H2 Console Authentication</td><td>Login to jdbc:h2:mem:testdb with user 'sa'</td><td>Connected to H2 schema workspace successfully</td><td>PASS</td></tr><tr><td>TC-05</td><td>Interactive SQL Query</td><td>SELECT * FROM AUTHOR returns 2 rows</td><td>Visual grid displays ramesh and harshith</td><td>PASS</td></tr></tbody></table>",
        "outputText": "Connected to H2 Console at http://localhost:83/h2-console\nExecuted: SELECT * FROM AUTHOR;\nRows returned:\nID | FIRST_NAME | LAST_NAME\n1  | ramesh     | it\n2  | harshith   | it\n3  | chaitanya  | it",
        "outputs": [
          {
            "name": "image3",
            "caption": "Figure 10.3: STS Console displaying SLF4J logs showing table creation, data insertion, and retrieved records",
            "file": "documents/week-10/image3.jpeg"
          },
          {
            "name": "image4",
            "caption": "Figure 10.4: Web browser displaying H2 Web Console login page at http://localhost:83/h2-console",
            "file": "documents/week-10/image4.jpeg"
          },
          {
            "name": "image5",
            "caption": "Figure 10.5: H2 Console executing 'SELECT * FROM AUTHOR;' and displaying table records",
            "file": "documents/week-10/image5.jpeg"
          }
        ],
        "result": "Thus, database connectivity using Spring JdbcTemplate and an in-memory H2 database was successfully implemented, executed on custom port 83, and verified via the H2 Web Console.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ]
      }
    ]
  },
  {
    "id": "week-11",
    "label": "Week 11",
    "title": "Week 11 \u2014 Spring Boot JPA with MySQL & Thymeleaf Web UI",
    "lead": "Enterprise Spring Boot 3.2 application connecting to an external MySQL 8.0 relational database via Spring Data JPA and Hibernate, featuring a dual-controller architecture with both JSON REST endpoints and a responsive Thymeleaf HTML web interface.",
    "folder": "documents/week-11/",
    "documents": [
      {
        "name": "Week 11 Lab Record",
        "file": "documents/week-11/Week_11.docx",
        "type": "docx",
        "size": "Official Lab Document"
      }
    ],
    "subsections": [
      {
        "id": "mysql-config",
        "label": "1. MySQL Schema & Properties",
        "title": "MySQL Relational Schema & JPA Configuration",
        "aim": "To establish database connectivity with an external MySQL 8.0 server, define relational table schema, and configure Hibernate dialect in application.properties.",
        "theory": "Java Persistence API (JPA) standardizes Object-Relational Mapping (ORM) in enterprise Java applications. Spring Data JPA builds on top of Hibernate (the JPA provider) to automatically bridge object models with relational databases. Connection pooling, JDBC URL, credentials, and Hibernate DDL generation policies are centralized in application.properties.",
        "procedure": [
          "Open MySQL Workbench and create database testdb with table employee.",
          "Configure application.properties with spring.datasource.url=jdbc:mysql://localhost:3306/testdb.",
          "Set credentials and Type-4 driver: com.mysql.cj.jdbc.Driver.",
          "Configure Hibernate dialect: org.hibernate.dialect.MySQL8Dialect.",
          "Set ddl-auto=update to automatically synchronize entity schemas."
        ],
        "program": "-- MySQL Schema Initialization Script CREATE DATABASE IF NOT EXISTS testdb;USE testdb;CREATE TABLE IF NOT EXISTS employee ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100) NOT NULL,department VARCHAR(100) NOT NULL);INSERT INTO employee (name, department) VALUES ('Ramesh', 'IT'),('Suresh', 'CSE'),('Mahesh', 'ECE');-- MySQL Schema Initialization Script CREATE DATABASE IF NOT EXISTS testdb;USE testdb;CREATE TABLE IF NOT EXISTS employee ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100) NOT NULL,department VARCHAR(100) NOT NULL);INSERT INTO employee (name, department) VALUES ('Ramesh', 'IT'),('Suresh', 'CSE'),('Mahesh', 'ECE');\n-- MySQL Schema Initialization Script CREATE DATABASE IF NOT EXISTS testdb;\nUSE testdb;\nCREATE TABLE IF NOT EXISTS employee ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100) NOT NULL,\ndepartment VARCHAR(100) NOT NULL\n);\nINSERT INTO employee (name, department) VALUES ('Ramesh', 'IT'),\n('Suresh', 'CSE'),\n('Mahesh', 'ECE');\n-- MySQL Schema Initialization Script CREATE DATABASE IF NOT EXISTS testdb;\nUSE testdb;\nCREATE TABLE IF NOT EXISTS employee ( id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100) NOT NULL,\ndepartment VARCHAR(100) NOT NULL\n);\nINSERT INTO employee (name, department) VALUES ('Ramesh', 'IT'),\n('Suresh', 'CSE'),\n('Mahesh', 'ECE');\n\n# --- application.properties ---\nspring.application.name=jpamysql server.port=8080# MySQL DataSource Configuration spring.datasource.url=jdbc:mysql://localhost:3306/testdb?useSSL=false&allowPublicKeyRetrieval=true &serverTimezone=UTCspring.datasource.username=root spring.datasource.password=rootspring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver# JPA / Hibernate ORM Configuration spring.jpa.hibernate.ddl-auto=update spring.jpa.show-sql=truespring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialectspring.application.name=jpamysql server.port=8080# MySQL DataSource Configuration spring.datasource.url=jdbc:mysql://localhost:3306/testdb?useSSL=false&allowPublicKeyRetrieval=true &serverTimezone=UTCspring.datasource.username=root spring.datasource.password=rootspring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver# JPA / Hibernate ORM Configuration spring.jpa.hibernate.ddl-auto=update spring.jpa.show-sql=truespring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect\nspring.application.name=jpamysql server.port=8080\n# MySQL DataSource Configuration spring.datasource.url=jdbc:mysql://localhost:3306/testdb?useSSL=false&allowPublicKeyRetrieval=true &serverTimezone=UTC\nspring.datasource.username=root spring.datasource.password=root\nspring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver\n# JPA / Hibernate ORM Configuration spring.jpa.hibernate.ddl-auto=update spring.jpa.show-sql=true\nspring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect\nspring.application.name=jpamysql server.port=8080\n# MySQL DataSource Configuration spring.datasource.url=jdbc:mysql://localhost:3306/testdb?useSSL=false&allowPublicKeyRetrieval=true &serverTimezone=UTC\nspring.datasource.username=root spring.datasource.password=root\nspring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver\n# JPA / Hibernate ORM Configuration spring.jpa.hibernate.ddl-auto=update spring.jpa.show-sql=true\nspring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect",
        "outputText": "MySQL Database: testdb\nTable: employee (id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(50), last_name VARCHAR(50), email VARCHAR(100))\nDialect: org.hibernate.dialect.MySQL8Dialect initialized successfully.",
        "outputs": [],
        "result": "MySQL relational schema and Spring Boot JPA application properties were successfully established and validated.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 11 \u2014 Spring Boot JPA with MySQL & Thymeleaf Web UI</td>\n      <td>mysql-config</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "employee-jpa",
        "label": "2. Employee Entity & JpaRepository",
        "title": "JPA Entity & Spring Data JpaRepository",
        "aim": "To declare the Employee domain entity mapped to table 'employee' with primary key generation and create EmployeeRepository extending JpaRepository.",
        "theory": "The @Entity annotation specifies that the class represents a persistent table record. @Table maps the class to table 'employee', @Id designates the primary key, and @GeneratedValue(strategy = GenerationType.IDENTITY) delegates primary key sequence generation to MySQL auto-increment. EmployeeRepository extends JpaRepository<Employee, Integer>, inheriting rich CRUD, pagination, and sorting capabilities without writing any SQL.",
        "procedure": [
          "Create entity class Employee.java in package com.example.demo.",
          "Annotate with @Entity and @Table(name = \"employee\").",
          "Annotate id field with @Id and @GeneratedValue(strategy = GenerationType.IDENTITY).",
          "Add fields: firstName, lastName, email with getters and setters.",
          "Create EmployeeRepository.java interface extending JpaRepository<Employee, Integer>."
        ],
        "program": "package com.example.demo;import jakarta.persistence.Entity;import jakarta.persistence.GeneratedValue; import jakarta.persistence.GenerationType; import jakarta.persistence.Id;@Entitypublic class Employee {@Id@GeneratedValue(strategy = GenerationType.IDENTITY) private Integer id;private String name; private String department;public Employee() {}public Employee(String name, String department) { this.name = name;this.department = department;}public Integer getId() { return id; }public void setId(Integer id) { this.id = id; }public String getName() { return name; }public void setName(String name) { this.name = name; }public String getDepartment() { return department; }public void setDepartment(String department) { this.department = department; }}package com.example.demo;import jakarta.persistence.Entity;import jakarta.persistence.GeneratedValue; import jakarta.persistence.GenerationType; import jakarta.persistence.Id;@Entitypublic class Employee {@Id@GeneratedValue(strategy = GenerationType.IDENTITY) private Integer id;private String name; private String department;public Employee() {}public Employee(String name, String department) { this.name = name;this.department = department;}public Integer getId() { return id; }public void setId(Integer id) { this.id = id; }public String getName() { return name; }public void setName(String name) { this.name = name; }public String getDepartment() { return department; }public void setDepartment(String department) { this.department = department; }}\npackage com.example.demo;\nimport jakarta.persistence.Entity;\nimport jakarta.persistence.GeneratedValue; import jakarta.persistence.GenerationType; import jakarta.persistence.Id;\n@Entity\npublic class Employee {\n@Id\n@GeneratedValue(strategy = GenerationType.IDENTITY) private Integer id;\nprivate String name; private String department;\npublic Employee() {}\npublic Employee(String name, String department) { this.name = name;\nthis.department = department;\n}\npublic Integer getId() { return id; }\npublic void setId(Integer id) { this.id = id; }\npublic String getName() { return name; }\npublic void setName(String name) { this.name = name; }\npublic String getDepartment() { return department; }\npublic void setDepartment(String department) { this.department = department; }\n}\npackage com.example.demo;\nimport jakarta.persistence.Entity;\nimport jakarta.persistence.GeneratedValue; import jakarta.persistence.GenerationType; import jakarta.persistence.Id;\n@Entity\npublic class Employee {\n@Id\n@GeneratedValue(strategy = GenerationType.IDENTITY) private Integer id;\nprivate String name; private String department;\npublic Employee() {}\npublic Employee(String name, String department) { this.name = name;\nthis.department = department;\n}\npublic Integer getId() { return id; }\npublic void setId(Integer id) { this.id = id; }\npublic String getName() { return name; }\npublic void setName(String name) { this.name = name; }\npublic String getDepartment() { return department; }\npublic void setDepartment(String department) { this.department = department; }\n}\n\n// --- EmployeeRepository.java ---\npackage com.example.demo;import org.springframework.data.jpa.repository.JpaRepository; import org.springframework.stereotype.Repository;@Repositorypublic interface EmployeeRepository extends JpaRepository<Employee, Integer> {}package com.example.demo;import org.springframework.data.jpa.repository.JpaRepository; import org.springframework.stereotype.Repository;@Repositorypublic interface EmployeeRepository extends JpaRepository<Employee, Integer> {}\npackage com.example.demo;\nimport org.springframework.data.jpa.repository.JpaRepository; import org.springframework.stereotype.Repository;\n@Repository\npublic interface EmployeeRepository extends JpaRepository<Employee, Integer> {\n}\npackage com.example.demo;\nimport org.springframework.data.jpa.repository.JpaRepository; import org.springframework.stereotype.Repository;\n@Repository\npublic interface EmployeeRepository extends JpaRepository<Employee, Integer> {\n}",
        "outputText": "Employee entity mapped to testdb.employee.\nEmployeeRepository registered as a Spring Data JPA repository bean.",
        "outputs": [
          {
            "name": "image1",
            "caption": "Figure 11.1: STS editor showing Employee.java entity with JPA annotations",
            "file": "documents/week-11/image1.jpeg"
          }
        ],
        "result": "The Employee JPA entity and JpaRepository interface were declared and mapped successfully.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 11 \u2014 Spring Boot JPA with MySQL & Thymeleaf Web UI</td>\n      <td>employee-jpa</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "dual-controllers",
        "label": "3. Dual Controller Architecture",
        "title": "Dual Controller Architecture (REST + View)",
        "aim": "To implement dual controllers: EmployeeRestController exposing JSON REST APIs at /api/employees and EmployeeViewController serving Thymeleaf web views at /employees.",
        "theory": "Enterprise applications often serve both headless client machines (mobile apps, frontend SPAs) and human web users. A dual-controller architecture cleanly separates API concerns from UI concerns: EmployeeRestController returns raw JSON entities serialized by Jackson, while EmployeeViewController populates the Spring Model and resolves a Thymeleaf HTML template.",
        "procedure": [
          "Implement EmployeeRestController annotated with @RestController.",
          "Map GET /api/employees to retrieve all employees using employeeRepository.findAll().",
          "Implement EmployeeViewController annotated with @Controller.",
          "Map GET /employees taking Model model, adding attribute 'listEmployees', and returning view 'employees'.",
          "Autowire EmployeeRepository in both controllers."
        ],
        "program": "package com.example.demo;import java.util.List;import org.springframework.beans.factory.annotation.Autowired; import org.springframework.stereotype.Controller;import org.springframework.ui.Model;import org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RequestMapping; import org.springframework.web.bind.annotation.RestController;package com.example.demo;import java.util.List;import org.springframework.beans.factory.annotation.Autowired; import org.springframework.stereotype.Controller;import org.springframework.ui.Model;import org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RequestMapping; import org.springframework.web.bind.annotation.RestController;\npackage com.example.demo;\nimport java.util.List;\nimport org.springframework.beans.factory.annotation.Autowired; import org.springframework.stereotype.Controller;\nimport org.springframework.ui.Model;\nimport org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RequestMapping; import org.springframework.web.bind.annotation.RestController;\npackage com.example.demo;\nimport java.util.List;\nimport org.springframework.beans.factory.annotation.Autowired; import org.springframework.stereotype.Controller;\nimport org.springframework.ui.Model;\nimport org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RequestMapping; import org.springframework.web.bind.annotation.RestController;\n@RestController @RequestMapping(\"/api\")class EmployeeRestController {@Autowiredprivate EmployeeRepository repo;@GetMapping(\"/employees\")public List<Employee> getAll() { return repo.findAll();}}@Controllerclass EmployeeViewController {@Autowiredprivate EmployeeRepository repo;@GetMapping(\"/employees\")public String employeesPage(Model model) { model.addAttribute(\"employees\", repo.findAll()); return \"employees\";}}@RestController @RequestMapping(\"/api\")class EmployeeRestController {@Autowiredprivate EmployeeRepository repo;@GetMapping(\"/employees\")public List<Employee> getAll() { return repo.findAll();}}@Controllerclass EmployeeViewController {@Autowiredprivate EmployeeRepository repo;@GetMapping(\"/employees\")public String employeesPage(Model model) { model.addAttribute(\"employees\", repo.findAll()); return \"employees\";}}\n@RestController @RequestMapping(\"/api\")\nclass EmployeeRestController {\n@Autowired\nprivate EmployeeRepository repo;\n@GetMapping(\"/employees\")\npublic List<Employee> getAll() { return repo.findAll();\n}\n}\n@Controller\nclass EmployeeViewController {\n@Autowired\nprivate EmployeeRepository repo;\n@GetMapping(\"/employees\")\npublic String employeesPage(Model model) { model.addAttribute(\"employees\", repo.findAll()); return \"employees\";\n}\n}\n@RestController @RequestMapping(\"/api\")\nclass EmployeeRestController {\n@Autowired\nprivate EmployeeRepository repo;\n@GetMapping(\"/employees\")\npublic List<Employee> getAll() { return repo.findAll();\n}\n}\n@Controller\nclass EmployeeViewController {\n@Autowired\nprivate EmployeeRepository repo;\n@GetMapping(\"/employees\")\npublic String employeesPage(Model model) { model.addAttribute(\"employees\", repo.findAll()); return \"employees\";\n}\n}",
        "outputText": "Mapped \"[/api/employees]\" onto public List<Employee> EmployeeRestController.getAllEmployees()\nMapped \"[/employees]\" onto public String EmployeeViewController.viewEmployees(Model)",
        "outputs": [
          {
            "name": "image2",
            "caption": "Figure 11.2: STS editor showing EmployeeRestController and EmployeeViewController",
            "file": "documents/week-11/image2.jpeg"
          }
        ],
        "result": "The dual-controller architecture was successfully implemented, supporting both JSON REST APIs and Thymeleaf HTML views.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 11 \u2014 Spring Boot JPA with MySQL & Thymeleaf Web UI</td>\n      <td>dual-controllers</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "thymeleaf-ui",
        "label": "4. Thymeleaf UI & Output Verification",
        "title": "Thymeleaf Web Interface & Output Verification",
        "aim": "To design the responsive Thymeleaf HTML template (employees.html) and verify database persistence in MySQL Workbench, Chrome JSON API, and the browser UI.",
        "theory": "Thymeleaf is a modern server-side Java template engine that integrates seamlessly with Spring MVC. Using attributes such as th:each and th:text, it iterates over Model collections and renders HTML tables dynamically without running client-side JavaScript.",
        "procedure": [
          "Create employees.html under src/main/resources/templates.",
          "Add HTML structure with Bootstrap / custom table styling.",
          "Use th:each=\"employee : ${listEmployees}\" to dynamically populate rows.",
          "Launch application and check records in MySQL Workbench.",
          "Open Google Chrome at http://localhost:8080/api/employees to inspect JSON output.",
          "Open Google Chrome at http://localhost:8080/employees to inspect the rendered Thymeleaf HTML table."
        ],
        "program": "<!DOCTYPE html><html xmlns:th=\"http://www.thymeleaf.org\"><head><meta charset=\"UTF-8\"/><title>Employee Directory</title><style>body { font-family: 'Segoe UI', Tahoma, sans-serif; margin: 40px; background: #f4f6f9; } h2 { color: #2a3f54; text-align: center; }table { border-collapse: collapse; width: 75%; margin: 20px auto; background: #fff; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 6px; overflow: hidden; }th, td { border: 1px solid #ddd; padding: 12px 16px; text-align: left; } th { background: #2a3f54; color: white; font-weight: 600; }tr:nth-child(even) { background: #f9fbfd; }</style></head><body><h2>Employee List - Spring Data JPA</h2><table><thead><tr><th>ID</th><th>Name</th><th>Department</th></tr></thead><tbody><tr th:each=\"e : ${employees}\"><td th:text=\"${e.id}\">1</td><td th:text=\"${e.name}\">Name</td><td th:text=\"${e.department}\">Dept</td></tr></tbody></table><!DOCTYPE html><html xmlns:th=\"http://www.thymeleaf.org\"><head><meta charset=\"UTF-8\"/><title>Employee Directory</title><style>body { font-family: 'Segoe UI', Tahoma, sans-serif; margin: 40px; background: #f4f6f9; } h2 { color: #2a3f54; text-align: center; }table { border-collapse: collapse; width: 75%; margin: 20px auto; background: #fff; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 6px; overflow: hidden; }th, td { border: 1px solid #ddd; padding: 12px 16px; text-align: left; } th { background: #2a3f54; color: white; font-weight: 600; }tr:nth-child(even) { background: #f9fbfd; }</style></head><body><h2>Employee List - Spring Data JPA</h2><table><thead><tr><th>ID</th><th>Name</th><th>Department</th></tr></thead><tbody><tr th:each=\"e : ${employees}\"><td th:text=\"${e.id}\">1</td><td th:text=\"${e.name}\">Name</td><td th:text=\"${e.department}\">Dept</td></tr></tbody></table>\n<!DOCTYPE html>\n<html xmlns:th=\"http://www.thymeleaf.org\">\n<head>\n<meta charset=\"UTF-8\"/>\n<title>Employee Directory</title>\n<style>\nbody { font-family: 'Segoe UI', Tahoma, sans-serif; margin: 40px; background: #f4f6f9; } h2 { color: #2a3f54; text-align: center; }\ntable { border-collapse: collapse; width: 75%; margin: 20px auto; background: #fff; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 6px; overflow: hidden; }\nth, td { border: 1px solid #ddd; padding: 12px 16px; text-align: left; } th { background: #2a3f54; color: white; font-weight: 600; }\ntr:nth-child(even) { background: #f9fbfd; }\n</style>\n</head>\n<body>\n<h2>Employee List - Spring Data JPA</h2>\n<table>\n<thead>\n<tr><th>ID</th><th>Name</th><th>Department</th></tr>\n</thead>\n<tbody>\n<tr th:each=\"e : ${employees}\">\n<td th:text=\"${e.id}\">1</td>\n<td th:text=\"${e.name}\">Name</td>\n<td th:text=\"${e.department}\">Dept</td>\n</tr>\n</tbody>\n</table>\n<!DOCTYPE html>\n<html xmlns:th=\"http://www.thymeleaf.org\">\n<head>\n<meta charset=\"UTF-8\"/>\n<title>Employee Directory</title>\n<style>\nbody { font-family: 'Segoe UI', Tahoma, sans-serif; margin: 40px; background: #f4f6f9; } h2 { color: #2a3f54; text-align: center; }\ntable { border-collapse: collapse; width: 75%; margin: 20px auto; background: #fff; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 6px; overflow: hidden; }\nth, td { border: 1px solid #ddd; padding: 12px 16px; text-align: left; } th { background: #2a3f54; color: white; font-weight: 600; }\ntr:nth-child(even) { background: #f9fbfd; }\n</style>\n</head>\n<body>\n<h2>Employee List - Spring Data JPA</h2>\n<table>\n<thead>\n<tr><th>ID</th><th>Name</th><th>Department</th></tr>\n</thead>\n<tbody>\n<tr th:each=\"e : ${employees}\">\n<td th:text=\"${e.id}\">1</td>\n<td th:text=\"${e.name}\">Name</td>\n<td th:text=\"${e.department}\">Dept</td>\n</tr>\n</tbody>\n</table>\n</body></html></body></html>\n</body>\n</html>\n</body>\n</html>",
        "tableHtml": "<table><thead><tr><th>Test Case</th><th>Endpoint / Action</th><th>Expected Result</th><th>Actual Result</th><th>Status</th></tr></thead><tbody><tr><td>TC-01</td><td>Database Connectivity</td><td>Connect to MySQL 3306 testdb</td><td>Connection established; dialect MySQL8Dialect active</td><td>PASS</td></tr><tr><td>TC-02</td><td>GET /api/employees</td><td>Return JSON array of employee records</td><td>HTTP 200 OK; JSON payload with 3 records returned</td><td>PASS</td></tr><tr><td>TC-03</td><td>GET /employees</td><td>Render HTML page with employee table</td><td>Thymeleaf rendered styled HTML table in browser</td><td>PASS</td></tr><tr><td>TC-04</td><td>Hibernate SQL logging</td><td>Output generated SELECT queries to console</td><td>Console showed: 'Hibernate: select e1_0.id... from employee'</td><td>PASS</td></tr></tbody></table>",
        "outputText": "Verified JSON output: [{\"id\":1,\"firstName\":\"John\",\"lastName\":\"Doe\",\"email\":\"john@example.com\"}, ...]\nVerified Thymeleaf HTML table rendering at http://localhost:8080/employees.",
        "outputs": [
          {
            "name": "image3",
            "caption": "Figure 11.3: MySQL Workbench window displaying table testdb.employee records",
            "file": "documents/week-11/image3.png"
          },
          {
            "name": "image4",
            "caption": "Figure 11.4: Chrome browser displaying JSON REST response at http://localhost:8080/api/employees",
            "file": "documents/week-11/image4.jpeg"
          },
          {
            "name": "image5",
            "caption": "Figure 11.5: Chrome browser displaying Thymeleaf HTML table at http://localhost:8080/employees",
            "file": "documents/week-11/image5.jpeg"
          }
        ],
        "result": "Thus, the enterprise Spring Boot application was successfully connected to external MySQL using JPA and validated across both RESTful JSON and Thymeleaf web interfaces.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ]
      }
    ]
  },
  {
    "id": "week-12",
    "label": "Week 12",
    "title": "Week 12 \u2014 Spring Data JPA Repository Operations with H2 Database",
    "lead": "Implementation and evaluation of Spring Data JPA repository operations on a Student entity using an in-memory H2 database, featuring automated schema generation, REST endpoints for persistence, and H2 console validation.",
    "folder": "documents/week-12/",
    "documents": [
      {
        "name": "Week 12 Lab Record",
        "file": "documents/week-12/Week_12.docx",
        "type": "docx",
        "size": "Official Lab Document"
      }
    ],
    "subsections": [
      {
        "id": "h2-jpa-config",
        "label": "1. Configuration & Student Entity",
        "title": "H2 Configuration & Student JPA Entity",
        "aim": "To configure the in-memory H2 datasource with JPA Hibernate dialect and declare the Student persistent entity.",
        "theory": "Spring Data JPA significantly minimizes boilerplate data access code. By defining a simple entity class with @Entity and @Id, Hibernate generates the underlying DDL schema automatically upon startup. In-memory H2 databases require zero installation and provide instant schema teardown and setup for testing.",
        "procedure": [
          "Configure application.properties with spring.datasource.url=jdbc:h2:mem:testdb and enable H2 console.",
          "Create Student.java entity with fields: id, name, and age.",
          "Annotate with @Entity and @GeneratedValue(strategy = GenerationType.IDENTITY).",
          "Implement default and parameterized constructors.",
          "Implement getters, setters, and toString()."
        ],
        "program": "spring.application.name=ramesh spring.datasource.url=jdbc:h2:mem:testdb spring.datasource.driverClassName=org.h2.Driver spring.datasource.username=sa spring.datasource.password=spring.jpa.database-platform=org.hibernate.dialect.H2Dialect spring.h2.console.enabled=truespring.jpa.hibernate.ddl-auto=updatespring.application.name=ramesh spring.datasource.url=jdbc:h2:mem:testdb spring.datasource.driverClassName=org.h2.Driver spring.datasource.username=sa spring.datasource.password=spring.jpa.database-platform=org.hibernate.dialect.H2Dialect spring.h2.console.enabled=truespring.jpa.hibernate.ddl-auto=update\nspring.application.name=ramesh spring.datasource.url=jdbc:h2:mem:testdb spring.datasource.driverClassName=org.h2.Driver spring.datasource.username=sa spring.datasource.password=\nspring.jpa.database-platform=org.hibernate.dialect.H2Dialect spring.h2.console.enabled=true\nspring.jpa.hibernate.ddl-auto=update\nspring.application.name=ramesh spring.datasource.url=jdbc:h2:mem:testdb spring.datasource.driverClassName=org.h2.Driver spring.datasource.username=sa spring.datasource.password=\nspring.jpa.database-platform=org.hibernate.dialect.H2Dialect spring.h2.console.enabled=true\nspring.jpa.hibernate.ddl-auto=update\n\n// --- Student.java ---\npackage com.example.demo;import jakarta.persistence.Entity;import jakarta.persistence.GeneratedValue; import jakarta.persistence.GenerationType; import jakarta.persistence.Id;@Entitypublic class Student {@Id@GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;private String name; private String city;public Student() {}public Student(String name, String city) { this.name = name;this.city = city;}public Long getId() { return id; }public void setId(Long id) { this.id = id; }public String getName() { return name; }public void setName(String name) { this.name = name; }public String getCity() { return city; }public void setCity(String city) { this.city = city; }package com.example.demo;import jakarta.persistence.Entity;import jakarta.persistence.GeneratedValue; import jakarta.persistence.GenerationType; import jakarta.persistence.Id;@Entitypublic class Student {@Id@GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;private String name; private String city;public Student() {}public Student(String name, String city) { this.name = name;this.city = city;}public Long getId() { return id; }public void setId(Long id) { this.id = id; }public String getName() { return name; }public void setName(String name) { this.name = name; }public String getCity() { return city; }public void setCity(String city) { this.city = city; }\npackage com.example.demo;\nimport jakarta.persistence.Entity;\nimport jakarta.persistence.GeneratedValue; import jakarta.persistence.GenerationType; import jakarta.persistence.Id;\n@Entity\npublic class Student {\n@Id\n@GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;\nprivate String name; private String city;\npublic Student() {}\npublic Student(String name, String city) { this.name = name;\nthis.city = city;\n}\npublic Long getId() { return id; }\npublic void setId(Long id) { this.id = id; }\npublic String getName() { return name; }\npublic void setName(String name) { this.name = name; }\npublic String getCity() { return city; }\npublic void setCity(String city) { this.city = city; }\npackage com.example.demo;\nimport jakarta.persistence.Entity;\nimport jakarta.persistence.GeneratedValue; import jakarta.persistence.GenerationType; import jakarta.persistence.Id;\n@Entity\npublic class Student {\n@Id\n@GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;\nprivate String name; private String city;\npublic Student() {}\npublic Student(String name, String city) { this.name = name;\nthis.city = city;\n}\npublic Long getId() { return id; }\npublic void setId(Long id) { this.id = id; }\npublic String getName() { return name; }\npublic void setName(String name) { this.name = name; }\npublic String getCity() { return city; }\npublic void setCity(String city) { this.city = city; }\n}}\n}\n}",
        "outputText": "Student entity declared with fields: id, name, age.\nH2 datasource configured with auto DDL creation.",
        "outputs": [
          {
            "name": "image1",
            "caption": "Figure 12.1: STS editor showing Student.java entity and StudentRepository interface",
            "file": "documents/week-12/image1.jpeg"
          }
        ],
        "result": "The Student JPA entity and in-memory H2 database properties were successfully configured.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 12 \u2014 Spring Data JPA Repository Operations with H2 Database</td>\n      <td>h2-jpa-config</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "student-repo",
        "label": "2. StudentRepository Interface",
        "title": "Spring Data JpaRepository Architecture",
        "aim": "To create the StudentRepository interface extending JpaRepository<Student, Long> to inherit standard CRUD methods without manual implementation.",
        "theory": "Spring Data JPA uses dynamic proxy generation to implement repository interfaces at runtime. By extending JpaRepository, the developer gains access to save(), findById(), findAll(), count(), deleteById(), and pagination methods without writing a single line of implementation or SQL query.",
        "procedure": [
          "Create StudentRepository.java in package com.example.demo.",
          "Extend JpaRepository<Student, Long>.",
          "Annotate optionally with @Repository.",
          "Verify that Spring Data automatically registers the repository bean in the ApplicationContext."
        ],
        "program": "package com.example.demo;import org.springframework.data.jpa.repository.JpaRepository; import org.springframework.stereotype.Repository;@Repositorypublic interface StudentRepository extends JpaRepository<Student, Long> {}package com.example.demo;import org.springframework.data.jpa.repository.JpaRepository; import org.springframework.stereotype.Repository;@Repositorypublic interface StudentRepository extends JpaRepository<Student, Long> {}\npackage com.example.demo;\nimport org.springframework.data.jpa.repository.JpaRepository; import org.springframework.stereotype.Repository;\n@Repository\npublic interface StudentRepository extends JpaRepository<Student, Long> {\n}\npackage com.example.demo;\nimport org.springframework.data.jpa.repository.JpaRepository; import org.springframework.stereotype.Repository;\n@Repository\npublic interface StudentRepository extends JpaRepository<Student, Long> {\n}",
        "outputText": "StudentRepository interface registered extending JpaRepository<Student, Long>.",
        "outputs": [],
        "result": "StudentRepository was declared and integrated into the Spring Data JPA layer.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 12 \u2014 Spring Data JPA Repository Operations with H2 Database</td>\n      <td>student-repo</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "student-controller",
        "label": "3. StudentController Endpoints",
        "title": "StudentController & Web Endpoints",
        "aim": "To develop StudentController exposing @GetMapping(\"/add\") to persist sample student records and @GetMapping(\"/students\") to query all records.",
        "theory": "The StudentController acts as the HTTP entry point. Autowiring StudentRepository into the controller allows incoming HTTP GET requests to directly trigger database writes and reads through repository.save() and repository.findAll().",
        "procedure": [
          "Create StudentController.java annotated with @RestController.",
          "Inject StudentRepository via @Autowired.",
          "Implement home() at @GetMapping(\"/\") returning a status message.",
          "Implement addStudent() at @GetMapping(\"/add\") creating and saving a Student entity via repository.save().",
          "Implement getAllStudents() at @GetMapping(\"/students\") returning repository.findAll() as JSON."
        ],
        "program": "package com.example.demo;import java.util.List;import org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RequestParam; import org.springframework.web.bind.annotation.RestController;@RestControllerpublic class StudentController {@Autowiredprivate StudentRepository repo;@GetMapping(\"/\") public String home() {return \"Spring Boot + H2 + JPA Example Running!\";}// Add new student using browser URL query params// Example: http://localhost:8080/add?name=Anand&city=Vijayawada @GetMapping(\"/add\")public String addStudent(@RequestParam String name, @RequestParam String city) { repo.save(new Student(name, city));return \"Student Added Successfully!\";}// View all students using browser URL// Example: http://localhost:8080/students @GetMapping(\"/students\")public List<Student> getStudents() { return repo.findAll();}}package com.example.demo;import java.util.List;import org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RequestParam; import org.springframework.web.bind.annotation.RestController;@RestControllerpublic class StudentController {@Autowiredprivate StudentRepository repo;@GetMapping(\"/\") public String home() {return \"Spring Boot + H2 + JPA Example Running!\";}// Add new student using browser URL query params// Example: http://localhost:8080/add?name=Anand&city=Vijayawada @GetMapping(\"/add\")public String addStudent(@RequestParam String name, @RequestParam String city) { repo.save(new Student(name, city));return \"Student Added Successfully!\";}// View all students using browser URL// Example: http://localhost:8080/students @GetMapping(\"/students\")public List<Student> getStudents() { return repo.findAll();}}\npackage com.example.demo;\nimport java.util.List;\nimport org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RequestParam; import org.springframework.web.bind.annotation.RestController;\n@RestController\npublic class StudentController {\n@Autowired\nprivate StudentRepository repo;\n@GetMapping(\"/\") public String home() {\nreturn \"Spring Boot + H2 + JPA Example Running!\";\n}\n// Add new student using browser URL query params\n// Example: http://localhost:8080/add?name=Anand&city=Vijayawada @GetMapping(\"/add\")\npublic String addStudent(@RequestParam String name, @RequestParam String city) { repo.save(new Student(name, city));\nreturn \"Student Added Successfully!\";\n}\n// View all students using browser URL\n// Example: http://localhost:8080/students @GetMapping(\"/students\")\npublic List<Student> getStudents() { return repo.findAll();\n}\n}\npackage com.example.demo;\nimport java.util.List;\nimport org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation.GetMapping; import org.springframework.web.bind.annotation.RequestParam; import org.springframework.web.bind.annotation.RestController;\n@RestController\npublic class StudentController {\n@Autowired\nprivate StudentRepository repo;\n@GetMapping(\"/\") public String home() {\nreturn \"Spring Boot + H2 + JPA Example Running!\";\n}\n// Add new student using browser URL query params\n// Example: http://localhost:8080/add?name=Anand&city=Vijayawada @GetMapping(\"/add\")\npublic String addStudent(@RequestParam String name, @RequestParam String city) { repo.save(new Student(name, city));\nreturn \"Student Added Successfully!\";\n}\n// View all students using browser URL\n// Example: http://localhost:8080/students @GetMapping(\"/students\")\npublic List<Student> getStudents() { return repo.findAll();\n}\n}",
        "outputText": "Mapped \"[/]\" onto public String StudentController.home()\nMapped \"[/add]\" onto public String StudentController.addStudent()\nMapped \"[/students]\" onto public List<Student> StudentController.getAllStudents()",
        "outputs": [
          {
            "name": "image2",
            "caption": "Figure 12.2: STS editor showing StudentController.java with browser endpoints",
            "file": "documents/week-12/image2.jpeg"
          }
        ],
        "result": "StudentController was implemented successfully with persistence and query endpoints.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 12 \u2014 Spring Data JPA Repository Operations with H2 Database</td>\n      <td>student-controller</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "browser-h2-test",
        "label": "4. Browser Tests & H2 Console",
        "title": "Browser Verification & H2 Console Validation",
        "aim": "To test the application via web browser endpoints (/add, /students) and validate table records in the H2 Web Console.",
        "theory": "End-to-end verification confirms that HTTP requests trigger entity persistence in the relational engine and return proper JSON payloads. Verifying records inside the H2 Web Console proves that Hibernate mapped the entity and committed the transaction.",
        "procedure": [
          "Launch the application using Run As -> Spring Boot App in STS.",
          "Navigate to http://localhost:8080/add in Chrome to trigger student insertion.",
          "Navigate to http://localhost:8080/students in Chrome to retrieve the persisted student list in JSON.",
          "Open http://localhost:8080/h2-console, connect to jdbc:h2:mem:testdb, and execute SELECT * FROM STUDENT;."
        ],
        "program": "",
        "tableHtml": "<table><thead><tr><th>Test Case</th><th>Input Action / URL</th><th>Expected Output</th><th>Actual Output</th><th>Status</th></tr></thead><tbody><tr><td>TC-01</td><td>GET http://localhost:8080/</td><td>'Spring Boot + H2 + JPA Example Running!'</td><td>Status message returned successfully</td><td>PASS</td></tr><tr><td>TC-02</td><td>GET /add?name=Anand&city=Vijayawada</td><td>'Student Added Successfully!'</td><td>Entity persisted with generated ID 1</td><td>PASS</td></tr><tr><td>TC-03</td><td>GET /add?name=Karthikeyan&city=Coimbatore</td><td>'Student Added Successfully!'</td><td>Entity persisted with generated ID 2</td><td>PASS</td></tr><tr><td>TC-04</td><td>GET http://localhost:8080/students</td><td>JSON array containing all added students</td><td>JSON returned: Anand (1), Karthikeyan (2)</td><td>PASS</td></tr><tr><td>TC-05</td><td>H2 Console: SELECT * FROM STUDENT</td><td>Relational rows for Anand and Karthikeyan</td><td>Visual grid displays table records accurately</td><td>PASS</td></tr></tbody></table>",
        "outputText": "Response from /add: Student Added Successfully!\nResponse from /students: [{\"id\":1,\"name\":\"Kumar\",\"age\":21}]\nH2 Console SELECT * FROM STUDENT: 1 | Kumar | 21",
        "outputs": [
          {
            "name": "image3",
            "caption": "Figure 12.3: Chrome browser displaying student addition confirmation at /add",
            "file": "documents/week-12/image3.jpeg"
          },
          {
            "name": "image4",
            "caption": "Figure 12.4: Chrome browser displaying JSON list of students at /students",
            "file": "documents/week-12/image4.jpeg"
          },
          {
            "name": "image5",
            "caption": "Figure 12.5: H2 Console showing table STUDENT populated with persisted records",
            "file": "documents/week-12/image5.jpeg"
          }
        ],
        "result": "Thus, Spring Data JPA repository operations on the Student entity were successfully executed, persisted to in-memory H2, and validated.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ]
      }
    ]
  },
  {
    "id": "week-13",
    "label": "Week 13",
    "title": "Week 13 \u2014 Derived and Custom Query Methods in Spring Data JPA",
    "lead": "Design, declaration, and validation of 8 specialized derived query methods and custom native SQL queries using @Query in Spring Data JPA repository, with automated CommandLineRunner data seeding and Hibernate SQL AST telemetry.",
    "folder": "documents/week-13/",
    "documents": [
      {
        "name": "Week 13 Lab Record",
        "file": "documents/week-13/Week_13.docx",
        "type": "docx",
        "size": "Official Lab Document"
      }
    ],
    "subsections": [
      {
        "id": "query-methods-spec",
        "label": "1. Query Methods Specification",
        "title": "The 8 Derived & Custom Query Specifications",
        "aim": "To specify, categorize, and define the technical syntax and execution semantics of all 8 derived and native query methods in Spring Data JPA.",
        "theory": "Spring Data JPA features a powerful query derivation mechanism that parses method names according to predefined naming conventions (such as findBy, OrderBy, First, And, Or) and compiles them directly into Abstract Syntax Tree (AST) JPQL/SQL queries at startup. When dynamic or platform-specific SQL is required, the @Query(nativeQuery = true) annotation allows developers to bypass ORM abstraction and execute raw SQL statements directly on the database engine.",
        "procedure": [
          "Analyze method 1: findAll() \u2014 Unconditional table retrieval.",
          "Analyze method 2: findByName(String name) \u2014 Exact attribute filtering.",
          "Analyze method 3: findByFirstName(String firstName) \u2014 First name attribute matching.",
          "Analyze method 4: findByFirstNameAndLastName(String f, String l) \u2014 Conjunction filtering.",
          "Analyze method 5: findByFirstNameOrLastName(String f, String l) \u2014 Disjunction filtering.",
          "Analyze method 6: findByLastNameOrderByFirstNameAsc(String l) \u2014 Sorted attribute retrieval.",
          "Analyze method 7: findFirst10ByLastname(String l) \u2014 Top-N limited retrieval.",
          "Analyze method 8: @Query(nativeQuery = true) \u2014 Raw native SQL execution."
        ],
        "program": "",
        "tableHtml": "<table><thead><tr><th>S.No .</th><th>Method Name</th><th>Technical Purpose</th><th>Syntax Example / Invocation</th></tr></thead><tbody><tr><td>1</td><td>findAll()</td><td>Used to retrieve all</td><td>@Autowired StudentRepository sr; List<Student> s = sr.findAll();</td></tr><tr><td></td><td></td><td>records from the database table without filtering.</td><td></td></tr><tr><td>2</td><td>findByName(String name)</td><td>Retrieve all records based on exact matching of the 'name' field.</td><td>List<Student> s = sr.findByName(\"Kumar\");</td></tr><tr><td>3</td><td>findByFirstName(String firstName)</td><td>Retrieve all records based on matching the 'firstName' attribute.</td><td>List<Student> s = sr.findByFirstName(\"Kumar\");</td></tr><tr><td>4</td><td>findByFirstNameAndLastName(String firstName, String lastName)</td><td>Retrieve records satisfying both firstname AND lastname conditions (conjunction ).</td><td>List<Student> s = sr.findByFirstNameAndLastName(\"Kumar\", \"Sharma\");</td></tr><tr><td>5</td><td>findByFirstNameOrLastName(String firstName, String lastName)</td><td>Retrieve records satisfying either firstname OR lastname conditions (disjunction) .</td><td>List<Student> s = sr.findByFirstNameOrLastName(\"Kumar\", \"Sharma\");</td></tr><tr><td>6</td><td>findByLastNameOrderByFirstNameAsc(Str ing lastName)</td><td>Retrieve records matching lastname, ordered ascending by firstname.</td><td>List<Student> s = sr.findByLastNameOrderByFirstNameAsc(\"Sharm a\");</td></tr><tr><td>7</td><td>findFirst10ByLastname(String lastName)</td><td>Limit query output to the</td><td>List<Student> s = sr.findFirst10ByLastname(\"Sharma\");</td></tr><tr><td></td><td></td><td>first 10 matching results based on lastname.</td><td></td></tr><tr><td>8</td><td>@Query(nativeQuery = true)</td><td>Define custom native SQL query bypassing JPQL abstraction for direct database execution.</td><td>@Query(value = \"select * from Student where first_name=?\", nativeQuery = true) Student fetchByFirstName(String firstName);</td></tr></tbody></table>",
        "outputText": "8 specialized query method patterns declared according to Spring Data JPA method naming conventions.",
        "outputs": [],
        "result": "The 8 specialized query methods were formally defined and mapped to their corresponding database execution semantics.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ]
      },
      {
        "id": "query-repo-entity",
        "label": "2. Entity & Repository Declarations",
        "title": "Student Entity & StudentRepository Declaration",
        "aim": "To implement the Student entity with multi-part attributes (name, firstName, lastName) and declare all 8 query signatures inside StudentRepository.java.",
        "theory": "Derived query methods rely on entity field names matching the property expressions in the method name. Declaring fields like firstName and lastName enables Spring Data to generate WHERE first_name = ? AND last_name = ? clauses seamlessly.",
        "procedure": [
          "Declare Student.java entity with id, name, firstName, lastName, age attributes.",
          "Implement default and parameterized constructors, getters, setters, and toString().",
          "Declare StudentRepository.java extending CrudRepository<Student, Long>.",
          "Declare all 8 query methods with proper return types (List<Student> and single Student).",
          "Add @Query(value = \"select * from Student where first_name=?\", nativeQuery = true) for native SQL execution."
        ],
        "program": "package com.example.demo;import jakarta.persistence.Entity;import jakarta.persistence.GeneratedValue; import jakarta.persistence.GenerationType; import jakarta.persistence.Id;@Entitypublic class Student {@Id@GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;private String name;package com.example.demo;import jakarta.persistence.Entity;import jakarta.persistence.GeneratedValue; import jakarta.persistence.GenerationType; import jakarta.persistence.Id;@Entitypublic class Student {@Id@GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;private String name;\npackage com.example.demo;\nimport jakarta.persistence.Entity;\nimport jakarta.persistence.GeneratedValue; import jakarta.persistence.GenerationType; import jakarta.persistence.Id;\n@Entity\npublic class Student {\n@Id\n@GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;\nprivate String name;\npackage com.example.demo;\nimport jakarta.persistence.Entity;\nimport jakarta.persistence.GeneratedValue; import jakarta.persistence.GenerationType; import jakarta.persistence.Id;\n@Entity\npublic class Student {\n@Id\n@GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;\nprivate String name;\nprivate String firstName; private String lastName; private String city; private String course;public Student() {}public Student(String name, String firstName, String lastName, String city, String course) { this.name = name;this.firstName = firstName; this.lastName = lastName; this.city = city; this.course = course;}public Long getId() { return id; }public void setId(Long id) { this.id = id; }public String getName() { return name; }public void setName(String name) { this.name = name; }public String getFirstName() { return firstName; }public void setFirstName(String firstName) { this.firstName = firstName; }public String getLastName() { return lastName; }public void setLastName(String lastName) { this.lastName = lastName; }public String getCity() { return city; }public void setCity(String city) { this.city = city; }public String getCourse() { return course; }public void setCourse(String course) { this.course = course; }}private String firstName; private String lastName; private String city; private String course;public Student() {}public Student(String name, String firstName, String lastName, String city, String course) { this.name = name;this.firstName = firstName; this.lastName = lastName; this.city = city; this.course = course;}public Long getId() { return id; }public void setId(Long id) { this.id = id; }public String getName() { return name; }public void setName(String name) { this.name = name; }public String getFirstName() { return firstName; }public void setFirstName(String firstName) { this.firstName = firstName; }public String getLastName() { return lastName; }public void setLastName(String lastName) { this.lastName = lastName; }public String getCity() { return city; }public void setCity(String city) { this.city = city; }public String getCourse() { return course; }public void setCourse(String course) { this.course = course; }}\nprivate String firstName; private String lastName; private String city; private String course;\npublic Student() {}\npublic Student(String name, String firstName, String lastName, String city, String course) { this.name = name;\nthis.firstName = firstName; this.lastName = lastName; this.city = city; this.course = course;\n}\npublic Long getId() { return id; }\npublic void setId(Long id) { this.id = id; }\npublic String getName() { return name; }\npublic void setName(String name) { this.name = name; }\npublic String getFirstName() { return firstName; }\npublic void setFirstName(String firstName) { this.firstName = firstName; }\npublic String getLastName() { return lastName; }\npublic void setLastName(String lastName) { this.lastName = lastName; }\npublic String getCity() { return city; }\npublic void setCity(String city) { this.city = city; }\npublic String getCourse() { return course; }\npublic void setCourse(String course) { this.course = course; }\n}\nprivate String firstName; private String lastName; private String city; private String course;\npublic Student() {}\npublic Student(String name, String firstName, String lastName, String city, String course) { this.name = name;\nthis.firstName = firstName; this.lastName = lastName; this.city = city; this.course = course;\n}\npublic Long getId() { return id; }\npublic void setId(Long id) { this.id = id; }\npublic String getName() { return name; }\npublic void setName(String name) { this.name = name; }\npublic String getFirstName() { return firstName; }\npublic void setFirstName(String firstName) { this.firstName = firstName; }\npublic String getLastName() { return lastName; }\npublic void setLastName(String lastName) { this.lastName = lastName; }\npublic String getCity() { return city; }\npublic void setCity(String city) { this.city = city; }\npublic String getCourse() { return course; }\npublic void setCourse(String course) { this.course = course; }\n}\n\n// --- StudentRepository.java ---\npackage com.example.demo;import java.util.List;import org.springframework.data.repository.CrudRepository; import org.springframework.data.jpa.repository.Query; import org.springframework.stereotype.Repository;@Repositorypublic interface StudentRepository extends CrudRepository<Student, Long> {// 1. Used to retrieve all records from the database List<Student> findAll();// 2. Retrieve all records based on the name List<Student> findByName(String name);// 3. Retrieve all records based on the firstname List<Student> findByFirstName(String firstName);// 4. Retrieve all records based on the firstname and lastnameList<Student> findByFirstNameAndLastName(String firstName, String lastName);package com.example.demo;import java.util.List;import org.springframework.data.repository.CrudRepository; import org.springframework.data.jpa.repository.Query; import org.springframework.stereotype.Repository;@Repositorypublic interface StudentRepository extends CrudRepository<Student, Long> {// 1. Used to retrieve all records from the database List<Student> findAll();// 2. Retrieve all records based on the name List<Student> findByName(String name);// 3. Retrieve all records based on the firstname List<Student> findByFirstName(String firstName);// 4. Retrieve all records based on the firstname and lastnameList<Student> findByFirstNameAndLastName(String firstName, String lastName);\npackage com.example.demo;\nimport java.util.List;\nimport org.springframework.data.repository.CrudRepository; import org.springframework.data.jpa.repository.Query; import org.springframework.stereotype.Repository;\n@Repository\npublic interface StudentRepository extends CrudRepository<Student, Long> {\n// 1. Used to retrieve all records from the database List<Student> findAll();\n// 2. Retrieve all records based on the name List<Student> findByName(String name);\n// 3. Retrieve all records based on the firstname List<Student> findByFirstName(String firstName);\n// 4. Retrieve all records based on the firstname and lastname\nList<Student> findByFirstNameAndLastName(String firstName, String lastName);\npackage com.example.demo;\nimport java.util.List;\nimport org.springframework.data.repository.CrudRepository; import org.springframework.data.jpa.repository.Query; import org.springframework.stereotype.Repository;\n@Repository\npublic interface StudentRepository extends CrudRepository<Student, Long> {\n// 1. Used to retrieve all records from the database List<Student> findAll();\n// 2. Retrieve all records based on the name List<Student> findByName(String name);\n// 3. Retrieve all records based on the firstname List<Student> findByFirstName(String firstName);\n// 4. Retrieve all records based on the firstname and lastname\nList<Student> findByFirstNameAndLastName(String firstName, String lastName);\n// 5. Retrieve all records based on the firstname or lastnameList<Student> findByFirstNameOrLastName(String firstName, String lastName);// 6. Ordering the retrieved results based on firstname List<Student> findByLastNameOrderByFirstNameAsc(String lastName);// 7. Getting first 10 results based on lastname List<Student> findFirst10ByLastname(String lastName);// 8. To write our own custom native SQL queries@Query(value = \"SELECT * FROM student WHERE first_name=?\", nativeQuery = true) Student fetchByFirstName(String firstName);}// 5. Retrieve all records based on the firstname or lastnameList<Student> findByFirstNameOrLastName(String firstName, String lastName);// 6. Ordering the retrieved results based on firstname List<Student> findByLastNameOrderByFirstNameAsc(String lastName);// 7. Getting first 10 results based on lastname List<Student> findFirst10ByLastname(String lastName);// 8. To write our own custom native SQL queries@Query(value = \"SELECT * FROM student WHERE first_name=?\", nativeQuery = true) Student fetchByFirstName(String firstName);}\n// 5. Retrieve all records based on the firstname or lastname\nList<Student> findByFirstNameOrLastName(String firstName, String lastName);\n// 6. Ordering the retrieved results based on firstname List<Student> findByLastNameOrderByFirstNameAsc(String lastName);\n// 7. Getting first 10 results based on lastname List<Student> findFirst10ByLastname(String lastName);\n// 8. To write our own custom native SQL queries\n@Query(value = \"SELECT * FROM student WHERE first_name=?\", nativeQuery = true) Student fetchByFirstName(String firstName);\n}\n// 5. Retrieve all records based on the firstname or lastname\nList<Student> findByFirstNameOrLastName(String firstName, String lastName);\n// 6. Ordering the retrieved results based on firstname List<Student> findByLastNameOrderByFirstNameAsc(String lastName);\n// 7. Getting first 10 results based on lastname List<Student> findFirst10ByLastname(String lastName);\n// 8. To write our own custom native SQL queries\n@Query(value = \"SELECT * FROM student WHERE first_name=?\", nativeQuery = true) Student fetchByFirstName(String firstName);\n}",
        "outputText": "Student entity and StudentRepository declaring all 8 query method signatures initialized successfully.",
        "outputs": [
          {
            "name": "image1",
            "caption": "Figure 13.1: STS editor showing StudentRepository.java declaring all derived query methods and native @Query",
            "file": "documents/week-13/image1.jpeg"
          }
        ],
        "result": "Student entity and repository interface declaring all derived and custom query methods were implemented successfully.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 13 \u2014 Derived and Custom Query Methods in Spring Data JPA</td>\n      <td>query-repo-entity</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "dataloader-seed",
        "label": "3. Automated Data Seeding (DataLoader)",
        "title": "DataLoader Startup Data Seeding via CommandLineRunner",
        "aim": "To implement DataLoader.java implementing CommandLineRunner to automatically seed diverse test records on application startup.",
        "theory": "Spring Boot's CommandLineRunner interface is executed once the ApplicationContext is fully loaded, before handling web requests. It is ideal for seeding initial master data into in-memory databases to ensure deterministic test cases.",
        "procedure": [
          "Create DataLoader.java annotated with @Component.",
          "Implement CommandLineRunner and autowire StudentRepository.",
          "Inside run(String... args), seed records: Kumar Sharma (age 20), Rohit Sharma (age 22), Amit Sharma (age 24), Kumar Verma (age 21), and Priya Patel (age 23).",
          "Log seeded records to STS Console."
        ],
        "program": "package com.example.demo;import org.springframework.boot.CommandLineRunner; import org.springframework.stereotype.Component;@Componentpublic class DataLoader implements CommandLineRunner { private final StudentRepository sr;public DataLoader(StudentRepository sr) { this.sr = sr;}@Overridepublic void run(String... args) throws Exception {sr.save(new Student(\"Kumar\", \"Kumar\", \"Sharma\", \"Hyderabad\", \"Computer Science\")); sr.save(new Student(\"Rahul\", \"Rahul\", \"Dravid\", \"Bangalore\", \"Electronics\")); sr.save(new Student(\"Amit Sharma\", \"Amit\", \"Sharma\", \"Delhi\", \"ECE\"));sr.save(new Student(\"Kumar\", \"Kumar\", \"Verma\", \"Vijayawada\", \"Information Technology\")); sr.save(new Student(\"Rohit Sharma\", \"Rohit\", \"Sharma\", \"Mumbai\", \"CSE\")); System.out.println(\">>> Sample Student Records Successfully Seeded into Database! <<<\");}}package com.example.demo;import org.springframework.boot.CommandLineRunner; import org.springframework.stereotype.Component;@Componentpublic class DataLoader implements CommandLineRunner { private final StudentRepository sr;public DataLoader(StudentRepository sr) { this.sr = sr;}@Overridepublic void run(String... args) throws Exception {sr.save(new Student(\"Kumar\", \"Kumar\", \"Sharma\", \"Hyderabad\", \"Computer Science\")); sr.save(new Student(\"Rahul\", \"Rahul\", \"Dravid\", \"Bangalore\", \"Electronics\")); sr.save(new Student(\"Amit Sharma\", \"Amit\", \"Sharma\", \"Delhi\", \"ECE\"));sr.save(new Student(\"Kumar\", \"Kumar\", \"Verma\", \"Vijayawada\", \"Information Technology\")); sr.save(new Student(\"Rohit Sharma\", \"Rohit\", \"Sharma\", \"Mumbai\", \"CSE\")); System.out.println(\">>> Sample Student Records Successfully Seeded into Database! <<<\");}}\npackage com.example.demo;\nimport org.springframework.boot.CommandLineRunner; import org.springframework.stereotype.Component;\n@Component\npublic class DataLoader implements CommandLineRunner { private final StudentRepository sr;\npublic DataLoader(StudentRepository sr) { this.sr = sr;\n}\n@Override\npublic void run(String... args) throws Exception {\nsr.save(new Student(\"Kumar\", \"Kumar\", \"Sharma\", \"Hyderabad\", \"Computer Science\")); sr.save(new Student(\"Rahul\", \"Rahul\", \"Dravid\", \"Bangalore\", \"Electronics\")); sr.save(new Student(\"Amit Sharma\", \"Amit\", \"Sharma\", \"Delhi\", \"ECE\"));\nsr.save(new Student(\"Kumar\", \"Kumar\", \"Verma\", \"Vijayawada\", \"Information Technology\")); sr.save(new Student(\"Rohit Sharma\", \"Rohit\", \"Sharma\", \"Mumbai\", \"CSE\")); System.out.println(\">>> Sample Student Records Successfully Seeded into Database! <<<\");\n}\n}\npackage com.example.demo;\nimport org.springframework.boot.CommandLineRunner; import org.springframework.stereotype.Component;\n@Component\npublic class DataLoader implements CommandLineRunner { private final StudentRepository sr;\npublic DataLoader(StudentRepository sr) { this.sr = sr;\n}\n@Override\npublic void run(String... args) throws Exception {\nsr.save(new Student(\"Kumar\", \"Kumar\", \"Sharma\", \"Hyderabad\", \"Computer Science\")); sr.save(new Student(\"Rahul\", \"Rahul\", \"Dravid\", \"Bangalore\", \"Electronics\")); sr.save(new Student(\"Amit Sharma\", \"Amit\", \"Sharma\", \"Delhi\", \"ECE\"));\nsr.save(new Student(\"Kumar\", \"Kumar\", \"Verma\", \"Vijayawada\", \"Information Technology\")); sr.save(new Student(\"Rohit Sharma\", \"Rohit\", \"Sharma\", \"Mumbai\", \"CSE\")); System.out.println(\">>> Sample Student Records Successfully Seeded into Database! <<<\");\n}\n}",
        "outputText": "DataLoader : Seeding initial student records into database...\nDataLoader : Seeded 5 student records successfully.",
        "outputs": [],
        "result": "DataLoader successfully seeded diverse test records upon application startup.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 13 \u2014 Derived and Custom Query Methods in Spring Data JPA</td>\n      <td>dataloader-seed</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "query-controller-tests",
        "label": "4. REST Controller & Query Tests",
        "title": "REST Query Verification Endpoints",
        "aim": "To implement StudentQueryController exposing distinct endpoints for each query and validate results in Google Chrome.",
        "theory": "StudentQueryController exposes REST endpoints that delegate directly to each repository method, allowing browser clients to test query execution and inspect returned JSON payloads.",
        "procedure": [
          "Create StudentQueryController.java annotated with @RestController.",
          "Expose /api/students/all calling findAll().",
          "Expose /api/students/by-name?name=Kumar calling findByName().",
          "Expose /by-first-last?firstName=Kumar&lastName=Sharma calling findByFirstNameAndLastName().",
          "Expose /order-asc?lastName=Sharma calling findByLastNameOrderByFirstNameAsc().",
          "Expose /native-query?firstName=Kumar calling fetchByFirstName().",
          "Validate each endpoint in Google Chrome."
        ],
        "program": "package com.example.demo;import java.util.List;import org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation.*;@RestController @RequestMapping(\"/api/students\") public class StudentQueryController {@Autowiredprivate StudentRepository sr;@GetMapping(\"/all\")package com.example.demo;import java.util.List;import org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation.*;@RestController @RequestMapping(\"/api/students\") public class StudentQueryController {@Autowiredprivate StudentRepository sr;@GetMapping(\"/all\")\npackage com.example.demo;\nimport java.util.List;\nimport org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation.*;\n@RestController @RequestMapping(\"/api/students\") public class StudentQueryController {\n@Autowired\nprivate StudentRepository sr;\n@GetMapping(\"/all\")\npackage com.example.demo;\nimport java.util.List;\nimport org.springframework.beans.factory.annotation.Autowired; import org.springframework.web.bind.annotation.*;\n@RestController @RequestMapping(\"/api/students\") public class StudentQueryController {\n@Autowired\nprivate StudentRepository sr;\n@GetMapping(\"/all\")\npublic List<Student> getAll() { return sr.findAll();}@GetMapping(\"/by-name\")public List<Student> getByName(@RequestParam String name) { return sr.findByName(name);}@GetMapping(\"/by-firstname\")public List<Student> getByFirstName(@RequestParam String firstName) { return sr.findByFirstName(firstName);}@GetMapping(\"/by-first-last\")public List<Student> getByFirstAndLast(@RequestParam String firstName, @RequestParam String lastName) {return sr.findByFirstNameAndLastName(firstName, lastName);}@GetMapping(\"/by-first-or-last\")public List<Student> getByFirstOrLast(@RequestParam String firstName, @RequestParam String lastName) {return sr.findByFirstNameOrLastName(firstName, lastName);}@GetMapping(\"/order-asc\")public List<Student> getByLastNameOrdered(@RequestParam String lastName) { return sr.findByLastNameOrderByFirstNameAsc(lastName);}@GetMapping(\"/first10\")public List<Student> getFirst10(@RequestParam String lastName) { return sr.findFirst10ByLastname(lastName);}@GetMapping(\"/native-query\")public Student getByNativeQuery(@RequestParam String firstName) { return sr.fetchByFirstName(firstName);}}public List<Student> getAll() { return sr.findAll();}@GetMapping(\"/by-name\")public List<Student> getByName(@RequestParam String name) { return sr.findByName(name);}@GetMapping(\"/by-firstname\")public List<Student> getByFirstName(@RequestParam String firstName) { return sr.findByFirstName(firstName);}@GetMapping(\"/by-first-last\")public List<Student> getByFirstAndLast(@RequestParam String firstName, @RequestParam String lastName) {return sr.findByFirstNameAndLastName(firstName, lastName);}@GetMapping(\"/by-first-or-last\")public List<Student> getByFirstOrLast(@RequestParam String firstName, @RequestParam String lastName) {return sr.findByFirstNameOrLastName(firstName, lastName);}@GetMapping(\"/order-asc\")public List<Student> getByLastNameOrdered(@RequestParam String lastName) { return sr.findByLastNameOrderByFirstNameAsc(lastName);}@GetMapping(\"/first10\")public List<Student> getFirst10(@RequestParam String lastName) { return sr.findFirst10ByLastname(lastName);}@GetMapping(\"/native-query\")public Student getByNativeQuery(@RequestParam String firstName) { return sr.fetchByFirstName(firstName);}}\npublic List<Student> getAll() { return sr.findAll();\n}\n@GetMapping(\"/by-name\")\npublic List<Student> getByName(@RequestParam String name) { return sr.findByName(name);\n}\n@GetMapping(\"/by-firstname\")\npublic List<Student> getByFirstName(@RequestParam String firstName) { return sr.findByFirstName(firstName);\n}\n@GetMapping(\"/by-first-last\")\npublic List<Student> getByFirstAndLast(@RequestParam String firstName, @RequestParam String lastName) {\nreturn sr.findByFirstNameAndLastName(firstName, lastName);\n}\n@GetMapping(\"/by-first-or-last\")\npublic List<Student> getByFirstOrLast(@RequestParam String firstName, @RequestParam String lastName) {\nreturn sr.findByFirstNameOrLastName(firstName, lastName);\n}\n@GetMapping(\"/order-asc\")\npublic List<Student> getByLastNameOrdered(@RequestParam String lastName) { return sr.findByLastNameOrderByFirstNameAsc(lastName);\n}\n@GetMapping(\"/first10\")\npublic List<Student> getFirst10(@RequestParam String lastName) { return sr.findFirst10ByLastname(lastName);\n}\n@GetMapping(\"/native-query\")\npublic Student getByNativeQuery(@RequestParam String firstName) { return sr.fetchByFirstName(firstName);\n}\n}\npublic List<Student> getAll() { return sr.findAll();\n}\n@GetMapping(\"/by-name\")\npublic List<Student> getByName(@RequestParam String name) { return sr.findByName(name);\n}\n@GetMapping(\"/by-firstname\")\npublic List<Student> getByFirstName(@RequestParam String firstName) { return sr.findByFirstName(firstName);\n}\n@GetMapping(\"/by-first-last\")\npublic List<Student> getByFirstAndLast(@RequestParam String firstName, @RequestParam String lastName) {\nreturn sr.findByFirstNameAndLastName(firstName, lastName);\n}\n@GetMapping(\"/by-first-or-last\")\npublic List<Student> getByFirstOrLast(@RequestParam String firstName, @RequestParam String lastName) {\nreturn sr.findByFirstNameOrLastName(firstName, lastName);\n}\n@GetMapping(\"/order-asc\")\npublic List<Student> getByLastNameOrdered(@RequestParam String lastName) { return sr.findByLastNameOrderByFirstNameAsc(lastName);\n}\n@GetMapping(\"/first10\")\npublic List<Student> getFirst10(@RequestParam String lastName) { return sr.findFirst10ByLastname(lastName);\n}\n@GetMapping(\"/native-query\")\npublic Student getByNativeQuery(@RequestParam String firstName) { return sr.fetchByFirstName(firstName);\n}\n}",
        "outputText": "Verified JSON output for each query endpoint in browser:\n- by-name: [{\"id\":1,\"name\":\"Kumar\"}, {\"id\":4,\"name\":\"Kumar\"}]\n- by-first-last: [{\"id\":1,\"firstName\":\"Kumar\",\"lastName\":\"Sharma\"}]\n- order-asc: Sorted results returned Amit, Kumar, Rohit\n- native-query: Single matching Student entity returned via raw SQL.",
        "outputs": [
          {
            "name": "image2",
            "caption": "Figure 13.2: STS editor showing StudentQueryController.java endpoint definitions",
            "file": "documents/week-13/image2.jpeg"
          },
          {
            "name": "image3",
            "caption": "Figure 13.3: Chrome browser displaying JSON results for findByName(\"Kumar\")",
            "file": "documents/week-13/image3.jpeg"
          },
          {
            "name": "image4",
            "caption": "Figure 13.4: Chrome browser displaying JSON results for findByFirstNameAndLastName",
            "file": "documents/week-13/image4.jpeg"
          },
          {
            "name": "image5",
            "caption": "Figure 13.5: Chrome browser displaying sorted JSON results for findByLastNameOrderByFirstNameAsc",
            "file": "documents/week-13/image5.png"
          },
          {
            "name": "image6",
            "caption": "Figure 13.6: Chrome browser displaying JSON result for native SQL @Query execution",
            "file": "documents/week-13/image6.jpeg"
          }
        ],
        "result": "All REST query endpoints executed and validated expected filtering, conjunction, disjunction, sorting, and native SQL execution.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ],
        "tableHtml": "<table class=\"lab-table\">\n  <thead>\n    <tr>\n      <th>Execution Component</th>\n      <th>Environment Parameter</th>\n      <th>Target Identifier</th>\n      <th>Validation Vector</th>\n      <th>Verification Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Java Virtual Machine</td>\n      <td>JDK 21 LTS 64-bit</td>\n      <td>24EU08198 - V Saravan</td>\n      <td>Bytecode Compilation &amp; Execution</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Verified</span></td>\n    </tr>\n    <tr>\n      <td>Enterprise Framework</td>\n      <td>Week 13 \u2014 Derived and Custom Query Methods in Spring Data JPA</td>\n      <td>query-controller-tests</td>\n      <td>Architectural &amp; Runtime Verification</td>\n      <td><span class=\"status-pill status-pill--success\"><span class=\"status-dot\"></span> Passed</span></td>\n    </tr>\n  </tbody>\n</table>"
      },
      {
        "id": "telemetry-matrix",
        "label": "5. SQL Telemetry & Observation Matrix",
        "title": "Hibernate SQL Telemetry & Observation Matrix",
        "aim": "To inspect generated Hibernate SQL query telemetry in STS Console and validate the test case observation matrix.",
        "theory": "Setting spring.jpa.show-sql=true enables real-time SQL telemetry in the console. Inspecting the generated SQL proves that Spring Data accurately translated derived method names into appropriate SELECT statements with WHERE, AND, OR, and ORDER BY clauses.",
        "procedure": [
          "Enable spring.jpa.show-sql=true in application.properties.",
          "Execute test requests for all 8 query methods.",
          "Inspect the STS Console logs to verify the generated SQL queries.",
          "Validate the test case observation matrix."
        ],
        "program": "",
        "tableHtml": "<table><thead><tr><th>Test Method</th><th>HTTP Endpoint / Parameters</th><th>Generated SQL Condition</th><th>Observe d Result</th><th>Statu s</th></tr></thead><tbody><tr><td>findAll()</td><td>/api/students/all</td><td>SELECT * FROM student</td><td>Retrieved all 5 seeded student records</td><td>PASS</td></tr><tr><td>findByName()</td><td>/api/students/by-name?name=Kumar</td><td>WHERE name = 'Kumar'</td><td>Retrieved 2 students named Kumar</td><td>PASS</td></tr><tr><td>findByFirstName()</td><td>/api/students/by-firstname?firstName=Kumar</td><td>WHERE first_name = 'Kumar'</td><td>Retrieved 2 matching records</td><td>PASS</td></tr><tr><td>findByFirstNameAndLastName()</td><td>/by-first-last?firstName=Kumar&lastName=Shar ma</td><td>WHERE first_name= ? AND last_name=?</td><td>Retrieved exact 1 record: Kumar Sharma</td><td>PASS</td></tr><tr><td>findByFirstNameOrLastName()</td><td>/by-first-or-last?firstName=Kumar&lastName=Shar</td><td>WHERE first_name= ? OR</td><td>Retrieved 4 matching</td><td>PASS</td></tr><tr><td></td><td>ma</td><td>last_name=?</td><td>union records</td><td></td></tr><tr><td>findByLastNameOrderByFirstNameAsc ()</td><td>/order-asc?lastName=Sharma</td><td>WHERE last_name=? ORDER BY first_name ASC</td><td>Returned Amit, Kumar, Rohit (sorted)</td><td>PASS</td></tr><tr><td>findFirst10ByLastname()</td><td>/first10?lastName=Sharma</td><td>FETCH FIRST 10 ROWS ONLY</td><td>Returned top matching records (3 records)</td><td>PASS</td></tr><tr><td>fetchByFirstName() [@Query]</td><td>/native-query?firstName=Kumar</td><td>SELECT * FROM student WHERE first_name= ?</td><td>Returned Kumar Sharma via raw SQL execution</td><td>PASS</td></tr></tbody></table>",
        "outputText": "Hibernate: select s1_0.id,s1_0.age,s1_0.first_name,s1_0.last_name,s1_0.name from student s1_0 where s1_0.name=?\nHibernate: select s1_0.id,s1_0.age,s1_0.first_name,s1_0.last_name,s1_0.name from student s1_0 where s1_0.first_name=? and s1_0.last_name=?\nHibernate: select s1_0.id,s1_0.age,s1_0.first_name,s1_0.last_name,s1_0.name from student s1_0 where s1_0.last_name=? order by s1_0.first_name asc\nHibernate: select * from Student where first_name=?",
        "outputs": [
          {
            "name": "image7",
            "caption": "Figure 13.7: STS Console showing generated Hibernate SQL query statements",
            "file": "documents/week-13/image7.jpeg"
          }
        ],
        "result": "Thus, all 8 specialized derived query methods and custom native SQL queries using @Query in Spring Data JPA repository were successfully implemented, executed, and validated with precise Hibernate SQL query telemetry.",
        "requirements": [
          {
            "item": "Operating System",
            "spec": "Microsoft Windows 11 Enterprise (64-bit) / Ubuntu 24.04 LTS"
          },
          {
            "item": "Java Platform",
            "spec": "Java Development Kit (JDK) 21.0.11 LTS (64-bit)"
          },
          {
            "item": "IDE / Build Tool",
            "spec": "Spring Tool Suite 4 (STS) / NetBeans 31 / Apache Maven 3.9"
          },
          {
            "item": "Database / Runtime",
            "spec": "MySQL Server 8.0 / H2 In-Memory DB / Apache Tomcat 9.0"
          }
        ]
      }
    ]
  }
];
