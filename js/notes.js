/**
 * Advanced Java — Textbook-style study notes
 * Displayed in the Introduction section of the lab portal.
 */
const ADV_JAVA_NOTES = {
  title: "Introduction to Advanced Java",
  subtitle: "Core concepts for laboratory work and semester examinations",
  overview:
    "Advanced Java extends core Java with enterprise technologies used to build database-driven, networked, and web-based applications. This section presents concise textbook notes on the topics most frequently taught in B.Tech Advanced Java Programming Lab courses. Study each topic in order before attempting the weekly laboratory records.",
  topics: [
    {
      id: "jdbc",
      title: "JDBC (Java Database Connectivity)",
      html: `
<article class="note-article">
  <h2>JDBC (Java Database Connectivity)</h2>

  <h3>Introduction</h3>
  <p>JDBC is the standard Java API that enables Java applications to interact with relational databases. It provides a uniform way to connect to a database, execute SQL statements, and process the results, irrespective of the underlying database product.</p>
  <p>In Advanced Java laboratories, JDBC forms the foundation for data persistence. Most enterprise applications eventually store and retrieve information from databases, and JDBC is the primary mechanism through which Java programs perform these operations.</p>

  <h3>Definition</h3>
  <p>JDBC (Java Database Connectivity) is an application programming interface that defines a set of Java classes and interfaces for connecting to relational databases, sending SQL queries and update statements, and retrieving results in a structured manner.</p>

  <h3>Need / Purpose</h3>
  <p>Without JDBC, every database vendor would require a different programming approach. JDBC abstracts vendor differences through drivers and a common API. It is used whenever a Java application must create, read, update, or delete data stored in systems such as MySQL, Oracle, PostgreSQL, or SQL Server.</p>

  <h3>Key Features</h3>
  <ul>
    <li>Provides a standard API independent of the database product.</li>
    <li>Supports SQL queries, prepared statements, and stored procedures.</li>
    <li>Allows transaction control using commit and rollback.</li>
    <li>Works with different driver types according to deployment needs.</li>
    <li>Returns query output through ResultSet for row-by-row processing.</li>
    <li>Integrates with connection pooling in enterprise environments.</li>
    <li>Supports batch updates for efficient bulk operations.</li>
  </ul>

  <h3>Architecture / Components / Working</h3>
  <p>The JDBC architecture consists of the application, the JDBC API, the Driver Manager, the JDBC driver, and the database. The application uses interfaces such as Connection, Statement, PreparedStatement, and ResultSet.</p>
  <ol>
    <li>Load or register the appropriate JDBC driver.</li>
    <li>Obtain a Connection using DriverManager and a JDBC URL.</li>
    <li>Create a Statement or PreparedStatement object.</li>
    <li>Execute SQL using executeQuery or executeUpdate.</li>
    <li>Process the ResultSet if the statement returns rows.</li>
    <li>Close ResultSet, Statement, and Connection resources.</li>
  </ol>
  <p>PreparedStatement is preferred for repeated queries and to reduce SQL injection risk, because parameters are bound separately from the SQL text.</p>

  <h3>Advantages</h3>
  <ul>
    <li>Database-independent programming model for Java applications.</li>
    <li>Direct and efficient execution of SQL.</li>
    <li>Fine-grained control over transactions and queries.</li>
    <li>Wide industry support and mature documentation.</li>
    <li>Forms the base layer used by ORM frameworks such as Hibernate.</li>
  </ul>

  <h3>Limitations</h3>
  <ul>
    <li>Requires writing and maintaining SQL manually.</li>
    <li>Boilerplate code for connection handling can become lengthy.</li>
    <li>Object-relational mapping must be handled by the programmer.</li>
    <li>Error-prone resource management if connections are not closed properly.</li>
  </ul>

  <h3>Applications</h3>
  <ul>
    <li>Student information and examination systems</li>
    <li>Banking and accounting software</li>
    <li>Inventory and billing applications</li>
    <li>Hospital management systems</li>
    <li>E-commerce product and order storage</li>
    <li>Report generation from relational data</li>
    <li>Administrative dashboards backed by SQL databases</li>
  </ul>

  <h3>Comparison</h3>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Feature</th><th>JDBC</th><th>Hibernate</th></tr>
      </thead>
      <tbody>
        <tr><td>Purpose</td><td>Direct SQL access from Java</td><td>Object-relational mapping</td></tr>
        <tr><td>Performance</td><td>High when SQL is tuned well</td><td>Good; may add overhead</td></tr>
        <tr><td>Complexity</td><td>Lower conceptually, more code</td><td>Higher abstraction, less SQL</td></tr>
        <tr><td>Usage</td><td>Simple CRUD and reports</td><td>Domain-driven enterprise apps</td></tr>
      </tbody>
    </table>
  </div>

  <h3>Important Points</h3>
  <ul>
    <li>JDBC URL format depends on the database and driver.</li>
    <li>DriverManager is responsible for selecting a suitable driver.</li>
    <li>executeQuery is used for SELECT; executeUpdate for INSERT, UPDATE, DELETE.</li>
    <li>ResultSet cursor is positioned before the first row initially.</li>
    <li>Always close database resources to avoid connection leaks.</li>
    <li>PreparedStatement improves security and often performance.</li>
    <li>setAutoCommit(false) is used to begin explicit transactions.</li>
    <li>JDBC is part of the standard Java SE platform libraries.</li>
  </ul>

  <h3>Summary</h3>
  <p>JDBC is the fundamental technology for database connectivity in Java. It standardizes how applications send SQL to relational databases and process results. Although modern frameworks reduce repetitive JDBC code, understanding JDBC remains essential for debugging, performance tuning, and laboratory examinations in Advanced Java.</p>
</article>
`,
    },
    {
      id: "servlets",
      title: "Java Servlets",
      html: `
<article class="note-article">
  <h2>Java Servlets</h2>

  <h3>Introduction</h3>
  <p>A servlet is a Java program that runs on a web server or application server and responds to client requests, typically over HTTP. Servlets generate dynamic content and form the server-side controller layer in many Java web applications.</p>
  <p>Unlike static HTML pages, servlets can process form data, interact with databases, manage sessions, and construct responses at runtime. They are a core topic in Advanced Java because they introduce request–response programming on the web.</p>

  <h3>Definition</h3>
  <p>A servlet is a server-side Java component, managed by a servlet container, that processes requests and produces responses according to the Java Servlet API.</p>

  <h3>Need / Purpose</h3>
  <p>Web applications require dynamic behaviour: authentication, validation, business logic, and database access. Servlets provide a portable, multithreaded, and efficient way to implement this behaviour within the Java ecosystem, without depending on a specific operating system or web server product.</p>

  <h3>Key Features</h3>
  <ul>
    <li>Platform-independent server-side components.</li>
    <li>Managed lifecycle: init, service, and destroy.</li>
    <li>Native support for HTTP methods such as GET and POST.</li>
    <li>Access to request parameters, headers, and attributes.</li>
    <li>Session tracking through HttpSession.</li>
    <li>Thread-safe design model under container control.</li>
    <li>Integration with JSP, filters, and listeners.</li>
  </ul>

  <h3>Architecture / Components / Working</h3>
  <p>The client browser sends an HTTP request to the server. The servlet container receives the request, maps it to a servlet based on URL patterns, and invokes the appropriate service method.</p>
  <ol>
    <li>Container loads the servlet and calls init() once.</li>
    <li>For each request, service() delegates to doGet() or doPost().</li>
    <li>The servlet reads input using HttpServletRequest.</li>
    <li>Business logic executes and may call JDBC or other services.</li>
    <li>Output is written through HttpServletResponse.</li>
    <li>On shutdown, destroy() releases resources.</li>
  </ol>
  <p>Common classes include HttpServlet, HttpServletRequest, HttpServletResponse, ServletConfig, and ServletContext. Deployment descriptors or annotations map URLs to servlet classes.</p>

  <h3>Advantages</h3>
  <ul>
    <li>Better performance than CGI due to persistent process model.</li>
    <li>Full access to the Java API and libraries.</li>
    <li>Secure and portable across compliant containers.</li>
    <li>Supports session management and cookies.</li>
    <li>Suitable as controllers in MVC architectures.</li>
  </ul>

  <h3>Limitations</h3>
  <ul>
    <li>Presentation HTML embedded in Java reduces maintainability.</li>
    <li>Requires a servlet container such as Apache Tomcat.</li>
    <li>Steeper learning curve than simple scripting for beginners.</li>
    <li>Pure servlet pages become verbose for large user interfaces.</li>
  </ul>

  <h3>Applications</h3>
  <ul>
    <li>Login and authentication modules</li>
    <li>Online registration forms</li>
    <li>Shopping cart controllers</li>
    <li>API endpoints returning JSON or XML</li>
    <li>File upload handlers</li>
    <li>Report download services</li>
    <li>College admission portals</li>
  </ul>

  <h3>Comparison</h3>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Feature</th><th>Servlet</th><th>JSP</th></tr>
      </thead>
      <tbody>
        <tr><td>Purpose</td><td>Request processing and control logic</td><td>Presentation and view generation</td></tr>
        <tr><td>Performance</td><td>High; compiled Java class</td><td>Similar after translation to servlet</td></tr>
        <tr><td>Complexity</td><td>More Java code for UI output</td><td>Easier for HTML-centric pages</td></tr>
        <tr><td>Usage</td><td>Controllers, filters, APIs</td><td>Dynamic web pages and views</td></tr>
      </tbody>
    </table>
  </div>

  <h3>Important Points</h3>
  <ul>
    <li>Every servlet runs inside a container, not as a standalone program.</li>
    <li>init() is called once; service methods are called per request.</li>
    <li>doGet() is used for retrieval; doPost() for form submission.</li>
    <li>HttpSession stores user-specific data across requests.</li>
    <li>ServletContext represents application-wide scope.</li>
    <li>JSP pages are ultimately translated into servlets.</li>
    <li>URL mapping connects client paths to servlet classes.</li>
    <li>Response content type must be set before writing output.</li>
  </ul>

  <h3>Summary</h3>
  <p>Servlets are the backbone of Java web request handling. They receive HTTP requests, execute server-side logic, and return dynamic responses. In laboratory work, servlets are often combined with JDBC for persistence and with JSP for presentation, forming a complete web application stack.</p>
</article>
`,
    },
    {
      id: "jsp",
      title: "JSP (JavaServer Pages)",
      html: `
<article class="note-article">
  <h2>JSP (JavaServer Pages)</h2>

  <h3>Introduction</h3>
  <p>JavaServer Pages (JSP) is a technology for creating dynamic web pages by embedding Java code and JSP tags inside HTML. It simplifies the construction of the presentation layer while retaining the power of the Java platform.</p>
  <p>JSP is widely taught alongside servlets because both belong to the same web technology family. In practice, JSP focuses on the view, whereas servlets handle control flow and business coordination.</p>

  <h3>Definition</h3>
  <p>JSP is a server-side scripting technology that allows developers to write web pages containing static markup and dynamic Java-based content. At runtime, the container translates a JSP into a servlet and executes it.</p>

  <h3>Need / Purpose</h3>
  <p>Writing large amounts of HTML inside servlet println statements is inconvenient and difficult to maintain. JSP separates page design from Java logic more effectively, enabling page authors to work with familiar markup while still generating dynamic output.</p>

  <h3>Key Features</h3>
  <ul>
    <li>HTML-centric syntax with support for dynamic content.</li>
    <li>Automatic translation of JSP into servlets by the container.</li>
    <li>Directives, scriptlets, expressions, and declarations.</li>
    <li>JSP Standard Tag Library (JSTL) for common tasks.</li>
    <li>Expression Language (EL) for concise data access.</li>
    <li>Implicit objects such as request, response, session, and out.</li>
    <li>Support for include and forward mechanisms.</li>
  </ul>

  <h3>Architecture / Components / Working</h3>
  <p>When a JSP is requested for the first time, the container translates it into a servlet source file, compiles it, loads the class, and then processes the request. Subsequent requests reuse the compiled servlet until the page changes.</p>
  <ol>
    <li>Client requests a .jsp resource.</li>
    <li>Container checks whether translation and compilation are needed.</li>
    <li>The generated servlet executes _jspService().</li>
    <li>Dynamic data is inserted into the HTML output.</li>
    <li>The completed page is returned to the browser.</li>
  </ol>
  <p>Modern practice discourages heavy scriptlets. Prefer EL, JSTL, and JavaBeans, keeping complex logic in servlets or service classes.</p>

  <h3>Advantages</h3>
  <ul>
    <li>Easier page design compared with pure servlets.</li>
    <li>Reuses the servlet architecture and performance model.</li>
    <li>Supports reusable tags and components.</li>
    <li>Convenient access to session and request data.</li>
    <li>Well suited to MVC view responsibilities.</li>
  </ul>

  <h3>Limitations</h3>
  <ul>
    <li>Excessive scriptlets lead to poor maintainability.</li>
    <li>First request may be slower due to translation.</li>
    <li>Debugging translated servlets can be less direct.</li>
    <li>Not ideal for pure API responses such as JSON services.</li>
  </ul>

  <h3>Applications</h3>
  <ul>
    <li>Dynamic college and company websites</li>
    <li>Result display pages</li>
    <li>Product catalogues in online stores</li>
    <li>User profile and dashboard screens</li>
    <li>Form confirmation and error pages</li>
    <li>Report presentation interfaces</li>
    <li>Content management front ends</li>
  </ul>

  <h3>Comparison</h3>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Feature</th><th>JSP</th><th>Servlet</th></tr>
      </thead>
      <tbody>
        <tr><td>Purpose</td><td>View and page rendering</td><td>Control and request handling</td></tr>
        <tr><td>Performance</td><td>Comparable after compilation</td><td>Direct compiled class</td></tr>
        <tr><td>Complexity</td><td>Lower for UI pages</td><td>Higher for HTML-heavy output</td></tr>
        <tr><td>Usage</td><td>Presentation templates</td><td>Controllers and processing</td></tr>
      </tbody>
    </table>
  </div>

  <h3>Important Points</h3>
  <ul>
    <li>A JSP is converted into a servlet before execution.</li>
    <li>page, include, and taglib are important directives.</li>
    <li>Expression Language accesses beans and scoped attributes.</li>
    <li>JSTL provides tags for conditions, loops, and formatting.</li>
    <li>Business logic should not be placed heavily inside JSP.</li>
    <li>jsp:include and jsp:forward support modular page design.</li>
    <li>Implicit object out writes content to the response.</li>
    <li>JSP and servlets together implement the MVC pattern effectively.</li>
  </ul>

  <h3>Summary</h3>
  <p>JSP provides a practical way to build dynamic views in Java web applications. It complements servlets by focusing on presentation while sharing the same runtime model. For examinations and laboratory projects, students should understand the JSP lifecycle, implicit objects, and the recommended separation of view and logic.</p>
</article>
`,
    },
    {
      id: "javabeans",
      title: "JavaBeans",
      html: `
<article class="note-article">
  <h2>JavaBeans</h2>

  <h3>Introduction</h3>
  <p>JavaBeans are reusable software components written in Java that follow a standard design convention. They encapsulate data and behaviour in a portable form that can be used across servlets, JSP pages, and larger application frameworks.</p>
  <p>In Advanced Java courses, JavaBeans are commonly used as model objects that carry form data, business values, or database records between different layers of a web application.</p>

  <h3>Definition</h3>
  <p>A JavaBean is a serializable Java class with a public no-argument constructor and properties accessed through getter and setter methods that follow a standard naming pattern.</p>

  <h3>Need / Purpose</h3>
  <p>Applications need a consistent way to represent entities such as Student, Product, or Employee. JavaBeans provide that consistency. They allow tools and frameworks to discover properties automatically and enable clean data transfer between presentation and business layers.</p>

  <h3>Key Features</h3>
  <ul>
    <li>Public no-argument constructor.</li>
    <li>Properties exposed using getX and setX methods.</li>
    <li>Usually implements Serializable.</li>
    <li>Encapsulates fields as private members.</li>
    <li>Reusable across many application contexts.</li>
    <li>Compatible with JSP bean tags and Expression Language.</li>
    <li>Supports simple, boolean, and indexed properties.</li>
  </ul>

  <h3>Architecture / Components / Working</h3>
  <p>A typical bean contains private fields, a default constructor, and accessors. In a JSP-based application, a bean may be instantiated, populated from request parameters, stored in request or session scope, and then displayed in the view.</p>
  <ol>
    <li>Define the bean class with private properties.</li>
    <li>Provide getters and setters for each property.</li>
    <li>Create the bean in a servlet or through jsp:useBean.</li>
    <li>Assign values from user input or database results.</li>
    <li>Place the bean in an appropriate scope.</li>
    <li>Read property values in the presentation layer.</li>
  </ol>

  <h3>Advantages</h3>
  <ul>
    <li>Promotes encapsulation and reusability.</li>
    <li>Simplifies data sharing between servlets and JSP.</li>
    <li>Supports introspection by frameworks and IDEs.</li>
    <li>Improves readability of application models.</li>
    <li>Forms the basis for entity and DTO design.</li>
  </ul>

  <h3>Limitations</h3>
  <ul>
    <li>Convention-based; misuse leads to anemic or poorly designed objects.</li>
    <li>Does not by itself provide validation or persistence.</li>
    <li>Excessive setters can weaken encapsulation if used carelessly.</li>
    <li>Not a complete substitute for a full domain model.</li>
  </ul>

  <h3>Applications</h3>
  <ul>
    <li>Form data transfer objects</li>
    <li>Student and employee records in lab projects</li>
    <li>Shopping cart item models</li>
    <li>Configuration holders</li>
    <li>Session-stored user profile objects</li>
    <li>Intermediate objects between JDBC and JSP</li>
    <li>Reusable UI-related data components</li>
  </ul>

  <h3>Important Points</h3>
  <ul>
    <li>Bean properties follow the get/set naming convention.</li>
    <li>Boolean properties may use isX instead of getX.</li>
    <li>Serializable allows beans to be saved or sent across JVMs when required.</li>
    <li>jsp:useBean, jsp:setProperty, and jsp:getProperty work with beans.</li>
    <li>Scope may be page, request, session, or application.</li>
    <li>Beans should generally contain related data for one concept.</li>
    <li>JavaBeans differ from Enterprise JavaBeans (EJB), which are server-side components.</li>
  </ul>

  <h3>Summary</h3>
  <p>JavaBeans provide a simple and standard way to package data in Java applications. They are especially useful in servlet–JSP architectures as model objects. Students should remember the constructor, serialization, and getter/setter conventions, as these points appear frequently in examinations.</p>
</article>
`,
    },
    {
      id: "hibernate",
      title: "Hibernate",
      html: `
<article class="note-article">
  <h2>Hibernate</h2>

  <h3>Introduction</h3>
  <p>Hibernate is an Object-Relational Mapping (ORM) framework for Java. It maps Java classes to database tables and allows developers to work with objects instead of writing repetitive JDBC and SQL code for every persistence operation.</p>
  <p>In Advanced Java, Hibernate is introduced after JDBC so that students can appreciate how ORM reduces boilerplate while still depending on the same relational database foundations.</p>

  <h3>Definition</h3>
  <p>Hibernate is an open-source ORM framework that automates the mapping between Java objects and relational database tables, and provides APIs for storing, updating, deleting, and querying persistent data.</p>

  <h3>Need / Purpose</h3>
  <p>Manual JDBC programming requires converting between objects and table rows repeatedly. Hibernate removes much of this conversion work, manages connections and transactions more conveniently, and helps applications remain database-portable through configurable dialects.</p>

  <h3>Key Features</h3>
  <ul>
    <li>Automatic object-relational mapping.</li>
    <li>Support for annotations and XML mapping files.</li>
    <li>Hibernate Query Language (HQL) for object-oriented queries.</li>
    <li>Transparent persistence and session management.</li>
    <li>Caching mechanisms for performance improvement.</li>
    <li>Database dialect support for multiple RDBMS products.</li>
    <li>Lazy loading and association mapping (one-to-many, many-to-one, etc.).</li>
  </ul>

  <h3>Architecture / Components / Working</h3>
  <p>Important elements include Configuration, SessionFactory, Session, Transaction, and Query. Persistent classes are mapped to tables, and a Session acts as the interface between the application and the database.</p>
  <ol>
    <li>Configure Hibernate using properties or annotations.</li>
    <li>Build a SessionFactory once for the application.</li>
    <li>Open a Session for a unit of work.</li>
    <li>Begin a Transaction.</li>
    <li>Perform save, update, delete, or query operations on entities.</li>
    <li>Commit the transaction and close the session.</li>
  </ol>

  <h3>Advantages</h3>
  <ul>
    <li>Reduces JDBC boilerplate significantly.</li>
    <li>Improves productivity for domain-driven designs.</li>
    <li>Provides portable persistence across databases.</li>
    <li>Supports complex associations cleanly.</li>
    <li>Integrates well with Spring-based applications.</li>
  </ul>

  <h3>Limitations</h3>
  <ul>
    <li>Learning curve around sessions, caching, and lazy loading.</li>
    <li>Generated SQL may need tuning for complex reports.</li>
    <li>Improper mapping can cause performance issues.</li>
    <li>Heavier than plain JDBC for very simple scripts.</li>
  </ul>

  <h3>Applications</h3>
  <ul>
    <li>Enterprise information systems</li>
    <li>Banking backend persistence layers</li>
    <li>E-commerce catalogues and orders</li>
    <li>Hospital and ERP modules</li>
    <li>Content platforms with relational data</li>
    <li>Any Java application requiring robust ORM</li>
  </ul>

  <h3>Comparison</h3>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Feature</th><th>Hibernate</th><th>JDBC</th></tr>
      </thead>
      <tbody>
        <tr><td>Purpose</td><td>ORM and object persistence</td><td>Direct SQL execution</td></tr>
        <tr><td>Performance</td><td>Good with caching and tuning</td><td>Excellent with hand-written SQL</td></tr>
        <tr><td>Complexity</td><td>Higher abstraction</td><td>Lower abstraction, more code</td></tr>
        <tr><td>Usage</td><td>Large object models</td><td>Simple queries and fine control</td></tr>
      </tbody>
    </table>
  </div>

  <h3>Important Points</h3>
  <ul>
    <li>SessionFactory is heavyweight and usually created once.</li>
    <li>Session is lightweight and not thread-safe.</li>
    <li>HQL works with class and property names, not table columns only.</li>
    <li>Lazy loading delays fetching associated data until accessed.</li>
    <li>Dirty checking updates modified persistent objects automatically.</li>
    <li>Dialect settings adapt SQL to the target database.</li>
    <li>Annotations such as Entity and Table define mappings in modern code.</li>
  </ul>

  <h3>Summary</h3>
  <p>Hibernate elevates data access from SQL-centric JDBC code to an object-oriented persistence model. It is valuable in enterprise development and frequently examined in Advanced Java syllabi. A clear understanding of SessionFactory, Session, transactions, and mapping is essential for both theory and laboratory practice.</p>
</article>
`,
    },
    {
      id: "spring",
      title: "Spring Framework",
      html: `
<article class="note-article">
  <h2>Spring Framework</h2>

  <h3>Introduction</h3>
  <p>The Spring Framework is a comprehensive application development framework for Java. It provides infrastructure support for building loosely coupled, testable, and maintainable enterprise applications through concepts such as Dependency Injection and Aspect-Oriented Programming.</p>
  <p>Spring does not replace Java. Instead, it organizes application architecture and reduces the need for repetitive configuration and boilerplate code across web, data, and service layers.</p>

  <h3>Definition</h3>
  <p>Spring is an open-source, lightweight framework that offers a programming and configuration model for modern Java applications, centred on Inversion of Control (IoC) and modular projects for web, data access, security, and messaging.</p>

  <h3>Need / Purpose</h3>
  <p>Enterprise applications become difficult to maintain when components create and manage their own dependencies. Spring’s IoC container creates objects, injects dependencies, and manages their lifecycle. This improves modularity and simplifies unit testing.</p>

  <h3>Key Features</h3>
  <ul>
    <li>Inversion of Control and Dependency Injection.</li>
    <li>Lightweight and non-invasive programming model.</li>
    <li>Aspect-Oriented Programming for cross-cutting concerns.</li>
    <li>Strong support for JDBC, ORM, and transactions.</li>
    <li>Spring MVC for web applications.</li>
    <li>Declarative transaction management.</li>
    <li>Extensive ecosystem of related Spring projects.</li>
  </ul>

  <h3>Architecture / Components / Working</h3>
  <p>At the core is the IoC container, commonly ApplicationContext. Beans are defined using annotations or configuration classes. Spring wires collaborators automatically according to type or name.</p>
  <ol>
    <li>Define components as Spring beans.</li>
    <li>Container instantiates beans at startup or on demand.</li>
    <li>Dependencies are injected through constructors or setters.</li>
    <li>Services execute business logic using injected repositories.</li>
    <li>Web layer controllers handle requests in Spring MVC.</li>
  </ol>
  <p>Cross-cutting tasks such as logging, security, and transactions can be applied through AOP without scattering duplicate code.</p>

  <h3>Advantages</h3>
  <ul>
    <li>Loose coupling through dependency injection.</li>
    <li>Improved testability with mockable dependencies.</li>
    <li>Modular architecture suited to large systems.</li>
    <li>Consistent transaction and data-access abstractions.</li>
    <li>Large community and production adoption.</li>
  </ul>

  <h3>Limitations</h3>
  <ul>
    <li>Initial configuration concepts can overwhelm beginners.</li>
    <li>Traditional Spring XML setups were verbose.</li>
    <li>Requires understanding of container behaviour and bean scopes.</li>
    <li>Misconfigured scanning can hide wiring errors until runtime.</li>
  </ul>

  <h3>Applications</h3>
  <ul>
    <li>Enterprise web portals</li>
    <li>Banking and insurance platforms</li>
    <li>E-commerce backends</li>
    <li>RESTful service layers</li>
    <li>Batch processing systems</li>
    <li>Secure authentication services</li>
    <li>Integration with messaging systems</li>
  </ul>

  <h3>Comparison</h3>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Feature</th><th>Spring</th><th>Spring Boot</th></tr>
      </thead>
      <tbody>
        <tr><td>Purpose</td><td>Flexible enterprise framework</td><td>Rapid application bootstrapping</td></tr>
        <tr><td>Performance</td><td>Depends on configuration</td><td>Comparable; optimized defaults</td></tr>
        <tr><td>Complexity</td><td>More manual setup</td><td>Convention over configuration</td></tr>
        <tr><td>Usage</td><td>Custom enterprise architectures</td><td>Microservices and quick starts</td></tr>
      </tbody>
    </table>
  </div>

  <h3>Important Points</h3>
  <ul>
    <li>IoC means the framework controls object creation and wiring.</li>
    <li>Constructor injection is generally preferred for required dependencies.</li>
    <li>Singleton is the default bean scope.</li>
    <li>Spring MVC uses DispatcherServlet as the front controller.</li>
    <li>@Component, @Service, @Repository, and @Controller stereotype annotations.</li>
    <li>AOP is commonly used for logging and transactions.</li>
    <li>Spring is modular; applications include only needed modules.</li>
  </ul>

  <h3>Summary</h3>
  <p>The Spring Framework provides the architectural backbone for many modern Java systems. Its IoC container, MVC model, and supporting modules enable clean, testable design. Students should understand dependency injection, bean lifecycle, and the relationship between Spring and Spring Boot.</p>
</article>
`,
    },
    {
      id: "spring-boot",
      title: "Spring Boot",
      html: `
<article class="note-article">
  <h2>Spring Boot</h2>

  <h3>Introduction</h3>
  <p>Spring Boot is an extension of the Spring ecosystem designed to simplify the creation of stand-alone, production-ready Spring applications. It reduces configuration effort through auto-configuration and starter dependencies.</p>
  <p>For laboratory and industry projects, Spring Boot allows students to build REST APIs and web services quickly while still using core Spring concepts such as dependency injection and MVC.</p>

  <h3>Definition</h3>
  <p>Spring Boot is an opinionated framework built on Spring that provides defaults, embedded servers, and starter packages so that developers can create runnable applications with minimal setup.</p>

  <h3>Need / Purpose</h3>
  <p>Traditional Spring applications often required extensive XML or Java configuration, dependency management, and server deployment steps. Spring Boot addresses these issues by offering sensible defaults, an embedded Tomcat or Jetty server, and production-ready features such as health checks.</p>

  <h3>Key Features</h3>
  <ul>
    <li>Auto-configuration based on classpath contents.</li>
    <li>Starter dependencies for common use cases.</li>
    <li>Embedded servlet containers for easy execution.</li>
    <li>Production-ready actuators for monitoring.</li>
    <li>Externalized configuration using application.properties or YAML.</li>
    <li>Simplified creation of REST controllers.</li>
    <li>Strong integration with Maven and Gradle.</li>
  </ul>

  <h3>Architecture / Components / Working</h3>
  <p>A Spring Boot application typically begins with a class annotated with SpringBootApplication. This annotation enables auto-configuration, component scanning, and configuration definition. Starters pull in related libraries, and the embedded server starts when the application runs.</p>
  <ol>
    <li>Create a project with required starters.</li>
    <li>Define the main application class.</li>
    <li>Write controllers, services, and repositories as Spring beans.</li>
    <li>Configure properties such as server port and database URL.</li>
    <li>Run the application as a jar with an embedded server.</li>
  </ol>

  <h3>Advantages</h3>
  <ul>
    <li>Very fast project setup and development.</li>
    <li>Less boilerplate configuration than classic Spring.</li>
    <li>Easy packaging and deployment as executable jars.</li>
    <li>Ideal for microservices architectures.</li>
    <li>Excellent documentation and tooling support.</li>
  </ul>

  <h3>Limitations</h3>
  <ul>
    <li>Auto-configuration can hide details from beginners.</li>
    <li>Default choices may not suit every specialized system.</li>
    <li>Executable jars can become large with many starters.</li>
    <li>Overuse of magic defaults may reduce architectural clarity.</li>
  </ul>

  <h3>Applications</h3>
  <ul>
    <li>RESTful microservices</li>
    <li>Cloud-native Java backends</li>
    <li>Student project APIs</li>
    <li>Admin and analytics services</li>
    <li>Integration gateways</li>
    <li>Prototype and MVP development</li>
    <li>Containerized deployments with Docker</li>
  </ul>

  <h3>Comparison</h3>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Feature</th><th>Spring Boot</th><th>Spring Framework</th></tr>
      </thead>
      <tbody>
        <tr><td>Purpose</td><td>Rapid Spring application creation</td><td>General enterprise foundation</td></tr>
        <tr><td>Performance</td><td>Production capable with defaults</td><td>Depends on manual tuning</td></tr>
        <tr><td>Complexity</td><td>Lower startup complexity</td><td>Higher configuration effort</td></tr>
        <tr><td>Usage</td><td>APIs and microservices</td><td>Broad custom architectures</td></tr>
      </tbody>
    </table>
  </div>

  <h3>Important Points</h3>
  <ul>
    <li>@SpringBootApplication combines several core annotations.</li>
    <li>Starters such as spring-boot-starter-web add web support.</li>
    <li>Embedded Tomcat removes the need for a separate server during development.</li>
    <li>application.properties centralizes configuration.</li>
    <li>Actuator endpoints expose health and metrics information.</li>
    <li>Spring Boot still uses the Spring IoC container internally.</li>
    <li>Fat jar packaging includes dependencies for standalone execution.</li>
  </ul>

  <h3>Summary</h3>
  <p>Spring Boot modernizes Spring development by emphasizing convention over configuration. It is widely used for REST services and microservices, and it is an important topic for students preparing for both university examinations and industry-oriented laboratory work.</p>
</article>
`,
    },
    {
      id: "maven",
      title: "Apache Maven",
      html: `
<article class="note-article">
  <h2>Apache Maven</h2>

  <h3>Introduction</h3>
  <p>Apache Maven is a build automation and project management tool for Java. It standardizes project structure, dependency management, compilation, testing, packaging, and reporting through a declarative configuration file named pom.xml.</p>
  <p>In Advanced Java laboratories, Maven is frequently used to manage libraries such as JDBC drivers, servlet APIs, Hibernate, and Spring Boot starters without manually downloading jar files.</p>

  <h3>Definition</h3>
  <p>Maven is a software project management tool that uses a Project Object Model (POM) to describe a project, its dependencies, and its build lifecycle, and then executes goals to produce the desired artifacts.</p>

  <h3>Need / Purpose</h3>
  <p>Large Java projects depend on many external libraries and require repeatable builds. Maven centralizes dependency versions, downloads artifacts from repositories, and applies a consistent lifecycle so that compile, test, and package steps behave uniformly across machines.</p>

  <h3>Key Features</h3>
  <ul>
    <li>Declarative Project Object Model in pom.xml.</li>
    <li>Automatic dependency download and transitive resolution.</li>
    <li>Standard directory layout for source and resources.</li>
    <li>Defined build lifecycle and phases.</li>
    <li>Plugin-based extensibility.</li>
    <li>Support for multi-module projects.</li>
    <li>Integration with remote repositories such as Maven Central.</li>
  </ul>

  <h3>Architecture / Components / Working</h3>
  <p>The POM identifies groupId, artifactId, and version. When a build is invoked, Maven moves through lifecycle phases and uses plugins to perform work. Dependencies are retrieved from local or remote repositories.</p>
  <ol>
    <li>Define coordinates and dependencies in pom.xml.</li>
    <li>Maven resolves jars into the local repository.</li>
    <li>Sources are compiled during the compile phase.</li>
    <li>Tests run during the test phase.</li>
    <li>package produces a jar or war artifact.</li>
    <li>install places the artifact into the local repository if requested.</li>
  </ol>

  <h3>Advantages</h3>
  <ul>
    <li>Removes manual jar management.</li>
    <li>Ensures reproducible builds across environments.</li>
    <li>Standard project layout improves collaboration.</li>
    <li>Works smoothly with IDEs and CI servers.</li>
    <li>Supports version conflict management strategies.</li>
  </ul>

  <h3>Limitations</h3>
  <ul>
    <li>Learning POM syntax takes initial effort.</li>
    <li>Complex multi-module builds can become hard to reason about.</li>
    <li>Network access is needed for first-time dependency downloads.</li>
    <li>Poorly chosen versions may introduce compatibility issues.</li>
  </ul>

  <h3>Applications</h3>
  <ul>
    <li>Building servlet and JSP war files</li>
    <li>Managing Spring Boot projects</li>
    <li>Automating test execution</li>
    <li>Continuous integration pipelines</li>
    <li>Multi-module enterprise codebases</li>
    <li>Generating project documentation and reports</li>
  </ul>

  <h3>Important Points</h3>
  <ul>
    <li>pom.xml is the heart of a Maven project.</li>
    <li>groupId, artifactId, and version uniquely identify an artifact.</li>
    <li>Default source path is src/main/java.</li>
    <li>Common phases include validate, compile, test, package, install, deploy.</li>
    <li>Dependencies may be transitive.</li>
    <li>scope settings such as compile, provided, and test control classpath visibility.</li>
    <li>Maven differs from Ant by preferring convention and declarative configuration.</li>
  </ul>

  <h3>Summary</h3>
  <p>Maven standardizes how Java projects are built and how libraries are managed. For Advanced Java students, it is a practical skill that reduces setup time and mirrors professional development workflows, especially when working with Spring Boot and other frameworks.</p>
</article>
`,
    },
    {
      id: "rest",
      title: "REST APIs",
      html: `
<article class="note-article">
  <h2>REST APIs</h2>

  <h3>Introduction</h3>
  <p>REST (Representational State Transfer) is an architectural style for designing networked applications. A REST API exposes resources through URLs and interacts with them using standard HTTP methods such as GET, POST, PUT, PATCH, and DELETE.</p>
  <p>In Advanced Java, REST APIs are commonly implemented using servlets or Spring Boot controllers. They enable frontend applications, mobile clients, and other services to exchange data, usually in JSON format.</p>

  <h3>Definition</h3>
  <p>A REST API is a web service interface that follows REST principles by treating application data as resources identified by URIs and manipulated through a uniform HTTP interface in a stateless manner.</p>

  <h3>Need / Purpose</h3>
  <p>Modern systems are distributed. Web browsers, mobile apps, and microservices must communicate over the network. REST APIs provide a simple, scalable, and language-independent way to exchange data without requiring tightly coupled remote procedure technologies.</p>

  <h3>Key Features</h3>
  <ul>
    <li>Resource-oriented URLs.</li>
    <li>Use of standard HTTP methods and status codes.</li>
    <li>Stateless communication between client and server.</li>
    <li>JSON or XML representations of resources.</li>
    <li>Cacheable responses where appropriate.</li>
    <li>Loose coupling between client and server.</li>
    <li>Suitable for microservices collaboration.</li>
  </ul>

  <h3>Architecture / Components / Working</h3>
  <p>A client sends an HTTP request to a resource endpoint. The server authenticates if required, executes business logic, accesses data stores, and returns a representation with an appropriate status code.</p>
  <ol>
    <li>Identify resources such as /students or /products/10.</li>
    <li>Map HTTP methods to operations on those resources.</li>
    <li>Accept and produce content types such as application/json.</li>
    <li>Validate input and apply business rules.</li>
    <li>Persist or retrieve data using JDBC, Hibernate, or Spring Data.</li>
    <li>Return a response body and status such as 200, 201, or 404.</li>
  </ol>

  <h3>Advantages</h3>
  <ul>
    <li>Simple and widely understood web standards.</li>
    <li>Easy integration across platforms and languages.</li>
    <li>Scales well due to statelessness.</li>
    <li>Works naturally with HTTP caching and proxies.</li>
    <li>Fits microservice and mobile backend designs.</li>
  </ul>

  <h3>Limitations</h3>
  <ul>
    <li>Not ideal for highly chatty or transactional multi-step protocols without careful design.</li>
    <li>Over-fetching or under-fetching can occur without query conventions.</li>
    <li>Security must be designed explicitly using HTTPS and tokens.</li>
    <li>No formal standard as rigid as some SOAP stacks.</li>
  </ul>

  <h3>Applications</h3>
  <ul>
    <li>Mobile application backends</li>
    <li>Single-page web application data services</li>
    <li>Payment and notification gateways</li>
    <li>Microservice-to-microservice communication</li>
    <li>Public developer platforms</li>
    <li>IoT device cloud interfaces</li>
    <li>College project service layers</li>
  </ul>

  <h3>Comparison</h3>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Feature</th><th>REST API</th><th>SOAP Web Service</th></tr>
      </thead>
      <tbody>
        <tr><td>Purpose</td><td>Lightweight resource APIs</td><td>Formal enterprise messaging</td></tr>
        <tr><td>Performance</td><td>Generally lighter over HTTP/JSON</td><td>Heavier XML envelopes</td></tr>
        <tr><td>Complexity</td><td>Lower for common web apps</td><td>Higher due to standards stack</td></tr>
        <tr><td>Usage</td><td>Web, mobile, microservices</td><td>Legacy enterprise integrations</td></tr>
      </tbody>
    </table>
  </div>

  <h3>Important Points</h3>
  <ul>
    <li>GET retrieves, POST creates, PUT replaces, PATCH partially updates, DELETE removes.</li>
    <li>REST APIs should be stateless; session state is not stored on the server per request.</li>
    <li>Use proper HTTP status codes for success and errors.</li>
    <li>JSON is the most common representation format today.</li>
    <li>Versioning strategies help evolve APIs safely.</li>
    <li>Spring Boot @RestController is a common implementation approach.</li>
    <li>Security often uses HTTPS with token-based authentication.</li>
  </ul>

  <h3>Summary</h3>
  <p>REST APIs are the standard method for exposing Java backend functionality to diverse clients. They rely on HTTP, resources, and representations rather than proprietary protocols. Mastery of REST concepts is essential for contemporary Advanced Java development and laboratory projects involving Spring Boot services.</p>
</article>
`,
    },
  ],
};
