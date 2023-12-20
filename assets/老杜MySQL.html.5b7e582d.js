import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as e,h as s}from"./app.34473693.js";const l={},d=s(`<h2 id="\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93" aria-hidden="true">#</a> \u6570\u636E\u5E93</h2><p>\u6570\u636E\u5E93\uFF1A \u82F1\u6587\u5355\u8BCD DataBase\uFF0C\u7B80\u79F0 DB \u3002\u6309\u7167\u4E00\u5B9A\u683C\u5F0F\u5B58\u50A8\u6570\u636E\u7684\u4E00\u4E9B\u6587\u4EF6\u7684\u7EC4\u5408\u3002 \u987E\u540D\u601D\u4E49\uFF1A\u5B58\u50A8\u6570\u636E\u7684\u4ED3\u5E93\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u4E00\u5806\u6587\u4EF6\u3002\u8FD9\u4E9B\u6587\u4EF6\u4E2D\u5B58\u50A8\u4E86\u5177\u6709\u7279\u5B9A\u683C\u5F0F\u7684\u6570\u636E\u3002 \u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\uFF1A DataBaseManagement\uFF0C\u7B80\u79F0 DBMS \u3002 \u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\u662F\u4E13\u95E8\u7528\u6765\u7BA1\u7406\u6570\u636E\u5E93\u4E2D\u6570\u636E\u7684\uFF0C\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\u53EF\u4EE5\u5BF9\u6570\u636E\u5E93\u5F53\u4E2D\u7684\u6570\u636E\u8FDB\u884C\u589E\u5220\u6539\u67E5\u3002 \u5E38\u89C1\u7684\u6570\u636E\u5E93\u7BA1\u7406\u7CFB\u7EDF\uFF1A MySQL\u3001Oracle\u3001MS SqlServer\u3001DB2\u3001sybase\u7B49....</p><h2 id="\u6570\u636E\u5E93\u8868" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u8868" aria-hidden="true">#</a> \u6570\u636E\u5E93\u8868</h2><p><strong>\u6570\u636E\u5E93\u5F53\u4E2D\u6700\u57FA\u672C\u7684\u5355\u5143\u662F\u8868\uFF1Atable</strong></p><table><thead><tr><th>\u59D3\u540D</th><th>\u6027\u522B</th><th>\u5E74\u9F84</th><th>\u5217\uFF08\u5B57\u6BB5\uFF09</th></tr></thead><tbody><tr><td>\u5F20\u4E09</td><td>\u7537</td><td>20</td><td>\u884C\uFF08\u8BB0\u5F55\uFF09</td></tr><tr><td>\u674E\u56DB</td><td>\u5973</td><td>21</td><td>\u884C\uFF08\u8BB0\u5F55\uFF09</td></tr><tr><td>\u738B\u4E94</td><td>\u7537</td><td>22</td><td>\u884C\uFF08\u8BB0\u5F55\uFF09</td></tr></tbody></table><p>\u4EFB\u4F55\u4E00\u5F20\u8868\u90FD\u6709\u884C\u548C\u5217\uFF1A \u884C\uFF08row\uFF09\uFF1A\u88AB\u79F0\u4E3A\u6570\u636E/\u8BB0\u5F55\u3002 \u5217\uFF08column\uFF09\uFF1A\u88AB\u79F0\u4E3A\u5B57\u6BB5\u3002</p><h2 id="sql\u8BED\u53E5\u7684\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#sql\u8BED\u53E5\u7684\u5206\u7C7B" aria-hidden="true">#</a> SQL\u8BED\u53E5\u7684\u5206\u7C7B</h2><p>SQL\u8BED\u53E5\u6709\u5F88\u591A\uFF0C\u6700\u597D\u8FDB\u884C\u5206\u95E8\u522B\u7C7B\uFF0C\u8FD9\u6837\u66F4\u5BB9\u6613\u8BB0\u5FC6\u3002 \u5206\u4E3A\uFF1A DQL\uFF1A\u6570\u636E\u67E5\u8BE2\u8BED\u8A00\uFF08\u51E1\u662F\u5E26\u6709select\u5173\u952E\u5B57\u7684\u90FD\u662F\u67E5\u8BE2\u8BED\u53E5\uFF09 select ... DML\uFF1A\u6570\u636E\u64CD\u4F5C\u8BED\u8A00\uFF08\u51E1\u662F\u5BF9\u8868\u5F53\u4E2D\u7684\u6570\u636E\u8FDB\u884C\u589E\u5220\u6539\u7684\u90FD\u662FDML\uFF09\uFF0C\u8FD9\u4E2A\u4E3B\u8981\u662F\u64CD\u4F5C\u8868\u4E2D\u7684\u6570\u636Edata\u3002 insert \u589E delete \u5220 update \u6539 DDL\uFF1A\u6570\u636E\u5B9A\u4E49\u8BED\u8A00\uFF0C\u51E1\u662F\u5E26\u6709create\u3001drop\u3001alter\u7684\u90FD\u662FDDL\u3002DDL\u4E3B\u8981\u64CD\u4F5C\u7684\u662F\u8868\u7684\u7ED3\u6784\u3002\u4E0D\u662F\u8868\u4E2D\u7684\u6570\u636E\u3002 create\uFF1A\u65B0\u5EFA\uFF0C\u7B49\u540C\u4E8E\u589E drop\uFF1A\u5220\u9664 alter\uFF1A\u4FEE\u6539</p><p>\u200B TCL\uFF1A\u662F\u4E8B\u52A1\u63A7\u5236\u8BED\u8A00\uFF0C\u5305\u62EC\uFF1A \u200B \u4E8B\u52A1\u63D0\u4EA4\uFF1Acommit \u200B \u4E8B\u52A1\u56DE\u6EDA\uFF1Arollback</p><p>\u200B DCL\uFF1A\u662F\u6570\u636E\u63A7\u5236\u8BED\u8A00\u3002 \u200B \u4F8B\u5982\uFF1A\u6388\u6743grant\u3001\u64A4\u9500\u6743\u9650revoke....</p><h2 id="\u8868\u7684\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u8868\u7684\u521B\u5EFA" aria-hidden="true">#</a> \u8868\u7684\u521B\u5EFA</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u5EFA\u8868\u7684\u8BED\u6CD5\u683C\u5F0F\uFF1A(\u5EFA\u8868\u5C5E\u4E8EDDL\u8BED\u53E5\uFF0CDDL\u5305\u62EC\uFF1Acreate,drop,alter)
create table \u8868\u540D(
  \u5B57\u6BB5\u540D1 \u6570\u636E\u7C7B\u578B, 
  \u5B57\u6BB5\u540D2 \u6570\u636E\u7C7B\u578B, 
  \u5B57\u6BB5\u540D3 \u6570\u636E\u7C7B\u578B
);

\u8868\u540D\uFF1A\u5EFA\u8BAE\u4EE5t_ \u6216\u8005 tbl_\u5F00\u59CB\uFF0C\u53EF\u8BFB\u6027\u5F3A\u3002\u89C1\u540D\u77E5\u610F\u3002
\u5B57\u6BB5\u540D\uFF1A\u89C1\u540D\u77E5\u610F\u3002
\u8868\u540D\u548C\u5B57\u6BB5\u540D\u90FD\u5C5E\u4E8E\u6807\u8BC6\u7B26\u3002

\u5173\u4E8Emysql\u4E2D\u7684\u6570\u636E\u7C7B\u578B
\u5F88\u591A\u6570\u636E\u7C7B\u578B\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u638C\u63E1\u4E00\u4E9B\u5E38\u89C1\u7684\u6570\u636E\u7C7B\u578B\u5373\u53EF\u3002
  varchar(\u6700\u957F255)
    \u53EF\u53D8\u957F\u5EA6\u7684\u5B57\u7B26\u4E32
    \u6BD4\u8F83\u667A\u80FD\uFF0C\u8282\u7701\u7A7A\u95F4\u3002
    \u4F1A\u6839\u636E\u5B9E\u9645\u7684\u6570\u636E\u957F\u5EA6\u52A8\u6001\u5206\u914D\u7A7A\u95F4\u3002

    \u4F18\u70B9\uFF1A\u8282\u7701\u7A7A\u95F4
    \u7F3A\u70B9\uFF1A\u9700\u8981\u52A8\u6001\u5206\u914D\u7A7A\u95F4\uFF0C\u901F\u5EA6\u6162\u3002

  char(\u6700\u957F255)
    \u5B9A\u957F\u5B57\u7B26\u4E32
    \u4E0D\u7BA1\u5B9E\u9645\u7684\u6570\u636E\u957F\u5EA6\u662F\u591A\u5C11\u3002
    \u5206\u914D\u56FA\u5B9A\u957F\u5EA6\u7684\u7A7A\u95F4\u53BB\u5B58\u50A8\u6570\u636E\u3002
    \u4F7F\u7528\u4E0D\u6070\u5F53\u7684\u65F6\u5019\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7A7A\u95F4\u7684\u6D6A\u8D39\u3002

    \u4F18\u70B9\uFF1A\u4E0D\u9700\u8981\u52A8\u6001\u5206\u914D\u7A7A\u95F4\uFF0C\u901F\u5EA6\u5FEB\u3002
    \u7F3A\u70B9\uFF1A\u4F7F\u7528\u4E0D\u5F53\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7A7A\u95F4\u7684\u6D6A\u8D39\u3002

   varchar \u548C char \u6211\u4EEC\u5E94\u8BE5\u600E\u4E48\u9009\u62E9\uFF1F
      \u6027\u522B\u5B57\u6BB5\u4F60\u9009\u4EC0\u4E48\uFF1F\u56E0\u4E3A\u6027\u522B\u662F\u56FA\u5B9A\u957F\u5EA6\u7684\u5B57\u7B26\u4E32\uFF0C\u6240\u4EE5\u9009\u62E9char\u3002
      \u59D3\u540D\u5B57\u6BB5\u4F60\u9009\u4EC0\u4E48\uFF1F\u6BCF\u4E00\u4E2A\u4EBA\u7684\u540D\u5B57\u957F\u5EA6\u4E0D\u540C\uFF0C\u6240\u4EE5\u9009\u62E9varchar\u3002

  int(\u6700\u957F11)
    \u6570\u5B57\u4E2D\u7684\u6574\u6570\u578B\u3002\u7B49\u540C\u4E8Ejava\u7684int\u3002

  bigint
    \u6570\u5B57\u4E2D\u7684\u957F\u6574\u578B\u3002\u7B49\u540C\u4E8Ejava\u4E2D\u7684long\u3002

  float	
    \u5355\u7CBE\u5EA6\u6D6E\u70B9\u578B\u6570\u636E

  double
    \u53CC\u7CBE\u5EA6\u6D6E\u70B9\u578B\u6570\u636E

  date
    \u77ED\u65E5\u671F\u7C7B\u578B

  datetime
    \u957F\u65E5\u671F\u7C7B\u578B

  clob 
    \u5B57\u7B26\u5927\u5BF9\u8C61
    \u6700\u591A\u53EF\u4EE5\u5B58\u50A84G\u7684\u5B57\u7B26\u4E32\u3002
    \u6BD4\u5982\uFF1A\u5B58\u50A8\u4E00\u7BC7\u6587\u7AE0\uFF0C\u5B58\u50A8\u4E00\u4E2A\u8BF4\u660E\u3002
    \u8D85\u8FC7255\u4E2A\u5B57\u7B26\u7684\u90FD\u8981\u91C7\u7528CLOB\u5B57\u7B26\u5927\u5BF9\u8C61\u6765\u5B58\u50A8\u3002
    Character Large OBject:CLOB

  blob
    \u4E8C\u8FDB\u5236\u5927\u5BF9\u8C61
    Binary Large OBject
    \u4E13\u95E8\u7528\u6765\u5B58\u50A8\u56FE\u7247\u3001\u58F0\u97F3\u3001\u89C6\u9891\u7B49\u6D41\u5A92\u4F53\u6570\u636E\u3002
    \u5F80BLOB\u7C7B\u578B\u7684\u5B57\u6BB5\u4E0A\u63D2\u5165\u6570\u636E\u7684\u65F6\u5019\uFF0C\u4F8B\u5982\u63D2\u5165\u4E00\u4E2A\u56FE\u7247\u3001\u89C6\u9891\u7B49\uFF0C
    \u4F60\u9700\u8981\u4F7F\u7528IO\u6D41\u624D\u884C\u3002
    
\u521B\u5EFA\u4E00\u4E2A\u5B66\u751F\u8868\uFF1F
    \u5B66\u53F7\u3001\u59D3\u540D\u3001\u5E74\u9F84\u3001\u6027\u522B\u3001\u90AE\u7BB1\u5730\u5740
    create table t_student(
      no int,
      name varchar(32),
      sex char(1),
      age int(3),
      email varchar(255)
    );

  \u5220\u9664\u8868\uFF1A
  drop table t_student; // \u5F53\u8FD9\u5F20\u8868\u4E0D\u5B58\u5728\u7684\u65F6\u5019\u4F1A\u62A5\u9519\uFF01

  // \u5982\u679C\u8FD9\u5F20\u8868\u5B58\u5728\u7684\u8BDD\uFF0C\u5220\u9664
  drop table if exists t_student;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#mysql\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> MySQL\u5E38\u7528\u547D\u4EE4</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u9000\u51FAmysql \uFF1Aexit;

\u67E5\u770Bmysql\u4E2D\u6709\u54EA\u4E9B\u6570\u636E\u5E93 : show databases; 
mysql&gt; show databases;
	+--------------------+
	| Database           |
	+--------------------+
	| information_schema |
	| mysql              |
	| performance_schema |
	| test               |
	+--------------------+
	mysql\u9ED8\u8BA4\u81EA\u5E26\u4E864\u4E2A\u6570\u636E\u5E93\u3002
	
\u9009\u62E9\u4F7F\u7528\u67D0\u4E2A\u6570\u636E\u5E93:
mysql&gt; use test;
	Database changed
	\u8868\u793A\u6B63\u5728\u4F7F\u7528\u4E00\u4E2A\u540D\u5B57\u53EB\u505Atest\u7684\u6570\u636E\u5E93\u3002

\u521B\u5EFA\u6570\u636E\u5E93:
mysql&gt; create database bjpowernode;
	Query OK, 1 row affected (0.00 sec)
mysql&gt; show databases;
		+--------------------+
		| Database           |
		+--------------------+
		| information_schema |
		| bjpowernode        |
		| mysql              |
		| performance_schema |
		| test               |
		+--------------------+
		
\u67E5\u770B\u67D0\u4E2A\u6570\u636E\u5E93\u4E0B\u6709\u54EA\u4E9B\u8868:
mysql&gt; show tables;

\u67E5\u770Bmysql\u6570\u636E\u5E93\u7684\u7248\u672C\u53F7\uFF1A
mysql&gt; select version();
		+-----------+
		| version() |
		+-----------+
		| 5.7.29    |
		+-----------+
		
\u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u662F\u54EA\u4E2A\u6570\u636E\u5E93:
mysql&gt; select database();
	+-------------+
	| database()  |
	+-------------+
	| ldmysqltest |
	+-------------+

\u5BFC\u5165\u4E00\u4E0B\u63D0\u524D\u51C6\u5907\u597D\u7684\u6570\u636E\uFF1Aldmysqltest.sql \u8FD9\u4E2A\u6587\u4EF6\u4E2D\u662F\u7EC3\u4E60\u51C6\u5907\u7684\u6570\u636E\u5E93\u8868\u3002
\u600E\u4E48\u5C06sql\u6587\u4EF6\u4E2D\u7684\u6570\u636E\u5BFC\u5165
mysql&gt; source D:\\bjpowernode.sql #\u6CE8\u610F\uFF1A\u8DEF\u5F84\u4E2D\u4E0D\u8981\u6709\u4E2D\u6587\uFF01\uFF01\uFF01\uFF01

\u67E5\u770B\u8868\u7684\u7ED3\u6784\uFF1A
mysql&gt; desc dept; # describe\u7F29\u5199\u4E3A\uFF1Adesc
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| DEPTNO | int(2)      | NO   | PRI | NULL    |       |\u90E8\u95E8\u7F16\u53F7
| DNAME  | varchar(14) | YES  |     | NULL    |       |\u90E8\u95E8\u540D\u5B57
| LOC    | varchar(13) | YES  |     | NULL    |       |\u5730\u7406\u4F4D\u7F6E
+--------+-------------+------+-----+---------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u8BE2select" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2select" aria-hidden="true">#</a> \u67E5\u8BE2select</h2><h3 id="\u7B80\u5355\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u67E5\u8BE2" aria-hidden="true">#</a> \u7B80\u5355\u67E5\u8BE2</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u67E5\u8BE2\u4E00\u4E2A\u5B57\u6BB5\uFF1F
select \u5B57\u6BB5\u540D from \u8868\u540D; 
# \u5176\u4E2D\u8981\u6CE8\u610F\uFF1Aselect\u548Cfrom\u90FD\u662F\u5173\u952E\u5B57\u3002
# \u5B57\u6BB5\u540D\u548C\u8868\u540D\u90FD\u662F\u6807\u8BC6\u7B26\u3002

\u5F3A\u8C03\uFF1A\u5BF9\u4E8ESQL\u8BED\u53E5\u6765\u8BF4\uFF0C\u6240\u6709\u7684SQL\u8BED\u53E5\u4EE5\u201C;\u201D\u7ED3\u5C3E\u3002\u53E6\u5916SQL\u8BED\u53E5\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u90FD\u884C\u3002

\u67E5\u8BE2\u4E24\u4E2A\u5B57\u6BB5\uFF0C\u6216\u8005\u591A\u4E2A\u5B57\u6BB5\u4F7F\u7528\u9017\u53F7\u9694\u5F00\u201C,\u201D
\u67E5\u8BE2\u90E8\u95E8\u7F16\u53F7\u548C\u90E8\u95E8\u540D
select deptno,dname from dept;
    +--------+------------+
    | deptno | dname      |
    +--------+------------+
    |     10 | ACCOUNTING |
    |     20 | RESEARCH   |
    |     30 | SALES      |
    |     40 | OPERATIONS |
    +--------+------------+
    
\u67E5\u8BE2\u6240\u6709\u5B57\u6BB5
\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A\u53EF\u4EE5\u628A\u6BCF\u4E2A\u5B57\u6BB5\u90FD\u5199\u4E0A
	select a,b,c,d,e,f... from tablename;
\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A\u53EF\u4EE5\u4F7F\u7528 *
	select * from dept;
		+--------+------------+----------+
		| DEPTNO | DNAME      | LOC      |
		+--------+------------+----------+
        |     10 | ACCOUNTING | NEW YORK |
        |     20 | RESEARCH   | DALLAS   |
        |     30 | SALES      | CHICAGO  |
        |     40 | OPERATIONS | BOSTON   |
        +--------+------------+----------+
    \u8FD9\u79CD\u65B9\u5F0F\u7684\u7F3A\u70B9\uFF1A
        1\u3001\u6548\u7387\u4F4E
        2\u3001\u53EF\u8BFB\u6027\u5DEE\u3002
    \u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u4E0D\u5EFA\u8BAE\u3002

\u7ED9\u67E5\u8BE2\u7684\u5217\u8D77\u522B\u540D\uFF1A\u4F7F\u7528as\u5173\u952E\u5B57\u8D77\u522B\u540D\u3002
  mysql&gt; select deptno,dname as deptname from dept;
      +--------+------------+
      | deptno | deptname   |
      +--------+------------+
      |     10 | ACCOUNTING |
      |     20 | RESEARCH   |
      |     30 | SALES      |
      |     40 | OPERATIONS |
      +--------+------------+
  \u6CE8\u610F\uFF1A\u53EA\u662F\u5C06\u663E\u793A\u7684\u67E5\u8BE2\u7ED3\u679C\u5217\u540D\u663E\u793A\u4E3Adeptname\uFF0C\u539F\u8868\u5217\u540D\u8FD8\u662F\u53EB\uFF1Adname
  \u8BB0\u4F4F\uFF1Aselect\u8BED\u53E5\u662F\u6C38\u8FDC\u90FD\u4E0D\u4F1A\u8FDB\u884C\u4FEE\u6539\u64CD\u4F5C\u7684\u3002\uFF08\u56E0\u4E3A\u53EA\u8D1F\u8D23\u67E5\u8BE2\uFF09

  as\u5173\u952E\u5B57\u53EF\u4EE5\u7701\u7565\u5417\uFF1F\u53EF\u4EE5\u7684
    mysql&gt; select deptno,dname deptname from dept;
    
\u5047\u8BBE\u8D77\u522B\u540D\u7684\u65F6\u5019\uFF0C\u522B\u540D\u91CC\u9762\u6709\u7A7A\u683C\uFF0C\u600E\u4E48\u529E\uFF1F   
select deptno,dname &#39;dept name&#39; from dept; //\u52A0\u5355\u5F15\u53F7
select deptno,dname &quot;dept name&quot; from dept; //\u52A0\u53CC\u5F15\u53F7
      +--------+------------+
      | deptno | dept name  |
      +--------+------------+
      |     10 | ACCOUNTING |
      |     20 | RESEARCH   |
      |     30 | SALES      |
      |     40 | OPERATIONS |
      +--------+------------+
\u6CE8\u610F\uFF1A\u5728\u6240\u6709\u7684\u6570\u636E\u5E93\u5F53\u4E2D\uFF0C\u5B57\u7B26\u4E32\u7EDF\u4E00\u4F7F\u7528\u5355\u5F15\u53F7\u62EC\u8D77\u6765\uFF0C\u5355\u5F15\u53F7\u662F\u6807\u51C6\uFF0C\u53CC\u5F15\u53F7\u5728oracle\u6570\u636E\u5E93\u4E2D\u7528\u4E0D\u4E86\u3002\u4F46\u662F\u5728mysql\u4E2D\u53EF\u4EE5\u4F7F\u7528\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6761\u4EF6\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u67E5\u8BE2" aria-hidden="true">#</a> \u6761\u4EF6\u67E5\u8BE2</h3><p>\u6761\u4EF6\u67E5\u8BE2\uFF1A\u4E0D\u662F\u5C06\u8868\u4E2D\u6240\u6709\u6570\u636E\u90FD\u67E5\u51FA\u6765\u3002\u662F\u67E5\u8BE2\u51FA\u6765\u7B26\u5408\u6761\u4EF6\u7684\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u67E5\u8BE2\u8BED\u6CD5\u683C\u5F0F\uFF1A
    select
      \u5B57\u6BB51,\u5B57\u6BB52,\u5B57\u6BB53....
    from 
      \u8868\u540D
    where
      \u6761\u4EF6;
      
\u90FD\u6709\u54EA\u4E9B\u6761\u4EF6\uFF1F
= \u7B49\u4E8E
\u67E5\u8BE2\u85AA\u8D44\u7B49\u4E8E800\u7684\u5458\u5DE5\u59D3\u540D\u548C\u7F16\u53F7\uFF1F
  select empno,ename from emp where sal = 800;
\u67E5\u8BE2SMITH\u7684\u7F16\u53F7\u548C\u85AA\u8D44\uFF1F
  select empno,sal from emp where ename = &#39;SMITH&#39;; //\u5B57\u7B26\u4E32\u4F7F\u7528\u5355\u5F15\u53F7

&lt;&gt; \u6216!= \u4E0D\u7B49\u4E8E
\u67E5\u8BE2\u85AA\u8D44\u4E0D\u7B49\u4E8E800\u7684\u5458\u5DE5\u59D3\u540D\u548C\u7F16\u53F7\uFF1F
  select empno,ename from emp where sal != 800;
  select empno,ename from emp where sal &lt;&gt; 800; // \u5C0F\u4E8E\u53F7\u548C\u5927\u4E8E\u53F7\u7EC4\u6210\u7684\u4E0D\u7B49\u53F7
  
&lt; \u5C0F\u4E8E
\u67E5\u8BE2\u85AA\u8D44\u5C0F\u4E8E2000\u7684\u5458\u5DE5\u59D3\u540D\u548C\u7F16\u53F7\uFF1F
  mysql&gt; select empno,ename,sal from emp where sal &lt; 2000;
  +-------+--------+---------+
  | empno | ename  | sal     |
  +-------+--------+---------+
  |  7369 | SMITH  |  800.00 |
  |  7499 | ALLEN  | 1600.00 |
  |  7521 | WARD   | 1250.00 |
  +-------+--------+---------+

&lt;= \u5C0F\u4E8E\u7B49\u4E8E
\u67E5\u8BE2\u85AA\u8D44\u5C0F\u4E8E\u7B49\u4E8E3000\u7684\u5458\u5DE5\u59D3\u540D\u548C\u7F16\u53F7\uFF1F
  select empno,ename,sal from emp where sal &lt;= 3000;

&gt; \u5927\u4E8E
\u67E5\u8BE2\u85AA\u8D44\u5927\u4E8E3000\u7684\u5458\u5DE5\u59D3\u540D\u548C\u7F16\u53F7\uFF1F
  select empno,ename,sal from emp where sal &gt; 3000;

&gt;= \u5927\u4E8E\u7B49\u4E8E
\u67E5\u8BE2\u85AA\u8D44\u5927\u4E8E\u7B49\u4E8E3000\u7684\u5458\u5DE5\u59D3\u540D\u548C\u7F16\u53F7\uFF1F
  select empno,ename,sal from emp where sal &gt;= 3000;

between \u2026 and \u2026 \u4E24\u4E2A\u503C\u4E4B\u95F4, \u7B49\u540C\u4E8E &gt;= and &lt;=
\u67E5\u8BE2\u85AA\u8D44\u57282450\u548C3000\u4E4B\u95F4\u7684\u5458\u5DE5\u4FE1\u606F\uFF1F\u5305\u62EC2450\u548C3000
  \u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A&gt;= and &lt;= \uFF08and\u662F\u5E76\u4E14\u7684\u610F\u601D\u3002\uFF09
    select empno,ename,sal from emp where sal &gt;= 2450 and sal &lt;= 3000;
    +-------+-------+---------+
    | empno | ename | sal     |
    +-------+-------+---------+
    |  7566 | JONES | 2975.00 |
    |  7698 | BLAKE | 2850.00 |
    |  7782 | CLARK | 2450.00 |
    |  7788 | SCOTT | 3000.00 |
    |  7902 | FORD  | 3000.00 |
    +-------+-------+---------+
  \u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1Abetween \u2026 and \u2026
    select 
      empno,ename,sal 
    from 
      emp 
    where 
      sal between 2450 and 3000;
    
    \u6CE8\u610F\uFF1A
      \u4F7F\u7528between and\u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u9075\u5FAA\u5DE6\u5C0F\u53F3\u5927\u3002
      between and\u662F\u95ED\u533A\u95F4\uFF0C\u5305\u62EC\u4E24\u7AEF\u7684\u503C\u3002

is null \u4E3A null\uFF08is not null \u4E0D\u4E3A\u7A7A\uFF09
\u6CE8\u610F\uFF1A\u5728\u6570\u636E\u5E93\u5F53\u4E2Dnull\u4E0D\u80FD\u4F7F\u7528\u7B49\u53F7\u8FDB\u884C\u8861\u91CF\u3002\u9700\u8981\u4F7F\u7528is null\u56E0\u4E3A\u6570\u636E\u5E93\u4E2D\u7684null\u4EE3\u8868\u4EC0\u4E48\u4E5F\u6CA1\u6709\uFF0C\u5B83\u4E0D\u662F\u4E00\u4E2A\u503C\uFF0C\u6240\u4EE5\u4E0D\u80FD\u4F7F\u7528\u7B49\u53F7\u8861\u91CF\u3002
	select empno,sal,comm from emp where emp.COMM IS NULL;

and \u5E76\u4E14 
or \u6216\u8005

and\u548Cor\u540C\u65F6\u51FA\u73B0\u7684\u8BDD\uFF0C\u6709\u4F18\u5148\u7EA7\u95EE\u9898\u5417\uFF1F
and\u548Cor\u540C\u65F6\u51FA\u73B0\uFF0Cand\u4F18\u5148\u7EA7\u8F83\u9AD8\u3002\u5982\u679C\u60F3\u8BA9or\u5148\u6267\u884C\uFF0C\u9700\u8981\u52A0\u201C\u5C0F\u62EC\u53F7\u201D.\u4EE5\u540E\u5728\u5F00\u53D1\u4E2D\uFF0C\u5982\u679C\u4E0D\u786E\u5B9A\u4F18\u5148\u7EA7\uFF0C\u5C31\u52A0\u5C0F\u62EC\u53F7\u5C31\u884C\u4E86\u3002

in \u5305\u542B\uFF0C\u76F8\u5F53\u4E8E\u591A\u4E2A or \uFF08not in \u4E0D\u5728\u8FD9\u4E2A\u8303\u56F4\u4E2D\uFF09
	select * from emp where sal in(1600, 3000);
	select * from emp where job in (&#39;manager&#39;,&#39;salesman&#39;);

not \u53EF\u4EE5\u53D6\u975E\uFF0C\u4E3B\u8981\u7528\u5728 is \u6216 in \u4E2D

like \u79F0\u4E3A\u6A21\u7CCA\u67E5\u8BE2\uFF0C\u652F\u6301%\u6216\u4E0B\u5212\u7EBF\u5339\u914D
# %\u5339\u914D\u4EFB\u610F\u591A\u4E2A\u5B57\u7B26
# \u4E0B\u5212\u7EBF\uFF1A\u4EFB\u610F\u4E00\u4E2A\u5B57\u7B26\u3002
#\uFF08%\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u7B26\u53F7\uFF0C_ \u4E5F\u662F\u4E00\u4E2A\u7279\u6B8A\u7B26\u53F7\uFF09

\u627E\u51FA\u540D\u5B57\u4EE5T\u7ED3\u5C3E\u7684\uFF1F
  select ename from emp where ename like &#39;%T&#39;;
  
\u627E\u51FA\u540D\u5B57\u4EE5K\u5F00\u59CB\u7684\uFF1F
  select ename from emp where ename like &#39;K%&#39;;

\u627E\u51FA\u7B2C\u4E8C\u4E2A\u5B57\u6BCD\u662FA\u7684\uFF1F
  select ename from emp where ename like &#39;_A%&#39;;

\u627E\u51FA\u7B2C\u4E09\u4E2A\u5B57\u6BCD\u662FR\u7684\uFF1F
  select ename from emp where ename like &#39;__R%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6392\u5E8F\u6570\u636E-order-by" tabindex="-1"><a class="header-anchor" href="#\u6392\u5E8F\u6570\u636E-order-by" aria-hidden="true">#</a> \u6392\u5E8F\u6570\u636E\uFF1Aorder by</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u8BED\u6CD5\u683C\u5F0F\uFF1A
	select 
		ename,sal
	from
		emp
	order by
		sal; // \u9ED8\u8BA4\u662F\u5347\u5E8F\uFF01\uFF01
\u6307\u5B9A\u964D\u5E8F\uFF1A desc
\u6307\u5B9A\u5347\u5E8F\uFF1A asc

\u4EE5\u4E24\u4E2A\u5B57\u6BB5\u6392\u5E8F\u5417\uFF1F\u6216\u8005\u8BF4\u6309\u7167\u591A\u4E2A\u5B57\u6BB5\u6392\u5E8F\uFF1F
\u67E5\u8BE2\u5458\u5DE5\u540D\u5B57\u548C\u85AA\u8D44\uFF0C\u8981\u6C42\u6309\u7167\u85AA\u8D44\u5347\u5E8F\uFF0C\u5982\u679C\u85AA\u8D44\u4E00\u6837\u7684\u8BDD\uFF0C\u518D\u6309\u7167\u540D\u5B57\u5347\u5E8F\u6392\u5217\u3002
select 
	ename,sal
from
	emp
order by
	sal asc, ename asc; // sal\u5728\u524D\uFF0C\u8D77\u4E3B\u5BFC\uFF0C\u53EA\u6709sal\u76F8\u7B49\u7684\u65F6\u5019\uFF0C\u624D\u4F1A\u8003\u8651\u542F\u7528ename\u6392\u5E8F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6570\u636E\u5904\u7406\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5904\u7406\u51FD\u6570" aria-hidden="true">#</a> \u6570\u636E\u5904\u7406\u51FD\u6570</h3><h4 id="\u5355\u884C\u5904\u7406\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5355\u884C\u5904\u7406\u51FD\u6570" aria-hidden="true">#</a> \u5355\u884C\u5904\u7406\u51FD\u6570</h4><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u5355\u884C\u5904\u7406\u51FD\u6570\u7684\u7279\u70B9\uFF1A\u4E00\u4E2A\u8F93\u5165\u5BF9\u5E94\u4E00\u4E2A\u8F93\u51FA\u3002
\u5355\u884C\u5904\u7406\u51FD\u6570\u5E38\u89C1:
lower \u8F6C\u6362\u5C0F\u5199
	mysql&gt; select lower(ename) as ename from emp;
	
upper \u8F6C\u6362\u5927\u5199
	mysql&gt; select upper(name) as name from t_student;
	
substr \u53D6\u5B50\u4E32\uFF08substr(\u88AB\u622A\u53D6\u7684\u5B57\u7B26\u4E32, \u8D77\u59CB\u4E0B\u6807,\u622A\u53D6\u7684\u957F\u5EA6)\uFF09
	mysql&gt; select substr(ename, 1, 1) as ename from emp;
	
concat\u51FD\u6570\u8FDB\u884C\u5B57\u7B26\u4E32\u7684\u62FC\u63A5
	mysql&gt; select concat(empno,ename) from emp;
	
length \u53D6\u957F\u5EA6
	mysql&gt; select length(ename) enamelength from emp;
	
trim \u53BB\u7A7A\u683C
	mysql&gt;	select * from emp where ename = trim(&#39;   KING&#39;);
	
str_to_date \u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u6210\u65E5\u671F

date_format \u683C\u5F0F\u5316\u65E5\u671F
	
format \u8BBE\u7F6E\u5343\u5206\u4F4D
	
case..when..then..when..then..else..end
\u5F53\u5458\u5DE5\u7684\u5DE5\u4F5C\u5C97\u4F4D\u662FMANAGER\u7684\u65F6\u5019\uFF0C\u5DE5\u8D44\u4E0A\u8C0310%\uFF0C\u5F53\u5DE5\u4F5C\u5C97\u4F4D\u662FSALESMAN\u7684\u65F6\u5019\uFF0C\u5DE5\u8D44\u4E0A\u8C0350%,\u5176\u5B83\u6B63\u5E38\u3002	\uFF08\u6CE8\u610F\uFF1A\u4E0D\u4FEE\u6539\u6570\u636E\u5E93\uFF0C\u53EA\u662F\u5C06\u67E5\u8BE2\u7ED3\u679C\u663E\u793A\u4E3A\u5DE5\u8D44\u4E0A\u8C03\uFF09
select 
  ename,job, sal as oldsal,
  (case job when &#39;MANAGER&#39; then sal*1.1 when &#39;SALESMAN&#39; then sal*1.5 else sal end) as newsal 
from 
  emp;

round \u56DB\u820D\u4E94\u5165
mysql&gt; select round(1236.567, 0) as result from emp; //\u4FDD\u7559\u6574\u6570\u4F4D\u3002
mysql&gt; select round(1236.567, 1) as result from emp; //\u4FDD\u75591\u4E2A\u5C0F\u6570
mysql&gt; select round(1236.567, 2) as result from emp; //\u4FDD\u75592\u4E2A\u5C0F\u6570
mysql&gt; select round(1236.567, -1) as result from emp; // \u4FDD\u7559\u5230\u5341\u4F4D\u3002

rand() \u751F\u6210\u968F\u673A\u6570
  mysql&gt; select round(rand()*100,0) from emp; // 100\u4EE5\u5185\u7684\u968F\u673A\u6570

ifnull \u53EF\u4EE5\u5C06 null \u8F6C\u6362\u6210\u4E00\u4E2A\u5177\u4F53\u503C
ifnull\u662F\u7A7A\u5904\u7406\u51FD\u6570\u3002\u4E13\u95E8\u5904\u7406\u7A7A\u7684\u3002\u5728\u6240\u6709\u6570\u636E\u5E93\u5F53\u4E2D\uFF0C\u53EA\u8981\u6709 NULL \u53C2\u4E0E\u7684\u6570\u5B66\u8FD0\u7B97\uFF0C\u6700\u7EC8\u7ED3\u679C\u5C31\u662F NULL\u3002
\u6CE8\u610F\uFF1A NULL \u53EA\u8981\u53C2\u4E0E\u8FD0\u7B97\uFF0C\u6700\u7EC8\u7ED3\u679C\u4E00\u5B9A\u662F NULL\u3002\u4E3A\u4E86\u907F\u514D\u8FD9\u4E2A\u73B0\u8C61\uFF0C\u9700\u8981\u4F7F\u7528ifnull\u51FD\u6570\u3002ifnull\u51FD\u6570\u7528\u6CD5\uFF1Aifnull(\u6570\u636E, \u88AB\u5F53\u505A\u54EA\u4E2A\u503C)\u3002\u5982\u679C\u201C\u6570\u636E\u201D\u4E3A NULL \u7684\u65F6\u5019\uFF0C\u628A\u8FD9\u4E2A\u6570\u636E\u7ED3\u6784\u5F53\u505A\u54EA\u4E2A\u503C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5206\u7EC4\u51FD\u6570-\u591A\u884C\u5904\u7406\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5206\u7EC4\u51FD\u6570-\u591A\u884C\u5904\u7406\u51FD\u6570" aria-hidden="true">#</a> \u5206\u7EC4\u51FD\u6570\uFF08\u591A\u884C\u5904\u7406\u51FD\u6570\uFF09</h4><p>\u591A\u884C\u5904\u7406\u51FD\u6570\u7279\u70B9\uFF1A\u591A\u4E2A\u8F93\u5165\uFF0C\u5BF9\u5E941\u4E2A\u8F93\u51FA\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>count	# \u8BA1\u6570
sum		# \u6C42\u548C
avg		# \u5E73\u5747\u503C
max		# \u6700\u5927\u503C
min		# \u6700\u5C0F\u503C

\u6CE8\u610F\uFF1A
	1. \u5206\u7EC4\u51FD\u6570\u5728\u4F7F\u7528\u7684\u65F6\u5019\u5FC5\u987B\u5148\u8FDB\u884C\u5206\u7EC4\uFF0C\u7136\u540E\u624D\u80FD\u7528\u3002\u5982\u679C\u4F60\u6CA1\u6709\u5BF9\u6570\u636E\u8FDB\u884C\u5206\u7EC4\uFF0C\u6574\u5F20\u8868\u9ED8\u8BA4\u4E3A\u4E00\u7EC4\u3002
	2. \u5206\u7EC4\u51FD\u6570\u81EA\u52A8\u5FFD\u7565NULL\uFF0C\u4F60\u4E0D\u9700\u8981\u63D0\u524D\u5BF9NULL\u8FDB\u884C\u5904\u7406\u3002
	3. \u5206\u7EC4\u51FD\u6570\u4E2Dcount(*)\u548Ccount(\u5177\u4F53\u5B57\u6BB5)\u6709\u4EC0\u4E48\u533A\u522B\uFF1F
		count(\u5177\u4F53\u5B57\u6BB5)\uFF1A\u8868\u793A\u7EDF\u8BA1\u8BE5\u5B57\u6BB5\u4E0B\u6240\u6709\u4E0D\u4E3ANULL\u7684\u5143\u7D20\u7684\u603B\u6570\u3002
		count(*)\uFF1A\u7EDF\u8BA1\u8868\u5F53\u4E2D\u7684\u603B\u884C\u6570\u3002\uFF08\u53EA\u8981\u6709\u4E00\u884C\u6570\u636Ecount\u5219++\uFF09
      	\u56E0\u4E3A\u6BCF\u4E00\u884C\u8BB0\u5F55\u4E0D\u53EF\u80FD\u90FD\u4E3ANULL\uFF0C\u4E00\u884C\u6570\u636E\u4E2D\u6709\u4E00\u5217\u4E0D\u4E3ANULL\uFF0C\u5219\u8FD9\u884C\u6570\u636E\u5C31\u662F\u6709\u6548\u7684\u3002
    4. \u5206\u7EC4\u51FD\u6570\u4E0D\u80FD\u591F\u76F4\u63A5\u4F7F\u7528\u5728where\u5B50\u53E5\u4E2D\u3002
    5. \u6240\u6709\u7684\u5206\u7EC4\u51FD\u6570\u53EF\u4EE5\u7EC4\u5408\u8D77\u6765\u4E00\u8D77\u7528\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="distinct" tabindex="-1"><a class="header-anchor" href="#distinct" aria-hidden="true">#</a> distinct</h4><p>\u628A\u67E5\u8BE2\u7ED3\u679C\u53BB\u9664\u91CD\u590D\u8BB0\u5F55 <strong>distinct</strong></p><p>\u6CE8\u610F\uFF1A\u539F\u8868\u6570\u636E\u4E0D\u4F1A\u88AB\u4FEE\u6539\uFF0C\u53EA\u662F\u67E5\u8BE2\u7ED3\u679C\u53BB\u91CD\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>// distinct\u53EA\u80FD\u51FA\u73B0\u5728\u6240\u6709\u5B57\u6BB5\u7684\u6700\u524D\u65B9\u3002
mysql&gt; select distinct job from emp;

// distinct\u51FA\u73B0\u5728job,deptno\u4E24\u4E2A\u5B57\u6BB5\u4E4B\u524D\uFF0C\u8868\u793A\u4E24\u4E2A\u5B57\u6BB5\u8054\u5408\u8D77\u6765\u53BB\u91CD\u3002
mysql&gt; select distinct job,deptno from emp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5206\u7EC4\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5206\u7EC4\u67E5\u8BE2" aria-hidden="true">#</a> \u5206\u7EC4\u67E5\u8BE2</h3><p>\u5728\u5B9E\u9645\u7684\u5E94\u7528\u4E2D\uFF0C\u53EF\u80FD\u6709\u8FD9\u6837\u7684\u9700\u6C42\uFF0C\u9700\u8981\u5148\u8FDB\u884C\u5206\u7EC4\uFF0C\u7136\u540E\u5BF9\u6BCF\u4E00\u7EC4\u7684\u6570\u636E\u8FDB\u884C\u64CD\u4F5C\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u5206\u7EC4\u67E5\u8BE2\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u8BED\u6CD5\u683C\u5F0F\uFF1A
	select
     ...
     from
     ...
     group by
     ...

\u6CE8\u610F:
select ename,job,sum(sal) from emp group by job;
    +-------+-----------+----------+
    | ename | job       | sum(sal) |
    +-------+-----------+----------+
    | SCOTT | ANALYST   |  6000.00 |
    | SMITH | CLERK     |  4150.00 |
    | JONES | MANAGER   |  8275.00 |
    | KING  | PRESIDENT |  5000.00 |
    | ALLEN | SALESMAN  |  5600.00 |
    +-------+-----------+----------+
\u4EE5\u4E0A\u8BED\u53E5\u5728 mysql \u4E2D\u53EF\u4EE5\u6267\u884C\uFF0C\u4F46 select \u540E\u9762\u6DFB\u52A0 ename \u5B57\u6BB5\u6CA1\u6709\u610F\u4E49\u3002
\u4EE5\u4E0A\u8BED\u53E5\u5728 oracle \u4E2D\u6267\u884C\u62A5\u9519\u3002
oracle \u7684\u8BED\u6CD5\u6BD4 mysql \u7684\u8BED\u6CD5\u4E25\u683C\u3002\uFF08mysql \u7684\u8BED\u6CD5\u76F8\u5BF9\u6765\u8BF4\u677E\u6563\u4E00\u4E9B\uFF01\uFF09

\u91CD\u70B9\u7ED3\u8BBA\uFF1A\u5728\u4E00\u6761 select \u8BED\u53E5\u5F53\u4E2D\uFF0C\u5982\u679C\u6709 group by \u8BED\u53E5\u7684\u8BDD\uFF0C select \u540E\u9762\u53EA\u80FD\u8DDF\uFF1A\u53C2\u52A0\u5206\u7EC4\u7684\u5B57\u6BB5\uFF0C\u4EE5\u53CA\u5206\u7EC4\u51FD\u6570\u3002\u5176\u5B83\u7684\u4E00\u5F8B\u4E0D\u80FD\u8DDF\u3002

\u627E\u51FA\u201C\u6BCF\u4E2A\u90E8\u95E8\uFF0C\u4E0D\u540C\u5DE5\u4F5C\u5C97\u4F4D\u201D\u7684\u6700\u9AD8\u85AA\u8D44\uFF1F
select 
  deptno, job, max(sal)
from
  emp
group by
  deptno, job;
\u6280\u5DE7\uFF1A\u4E24\u4E2A\u5B57\u6BB5\u8054\u5408\u62101\u4E2A\u5B57\u6BB5\u770B\u3002\uFF08\u4E24\u4E2A\u5B57\u6BB5\u8054\u5408\u5206\u7EC4\uFF09

\u4F7F\u7528 having \u53EF\u4EE5\u5BF9\u5206\u5B8C\u7EC4\u4E4B\u540E\u7684\u6570\u636E\u8FDB\u4E00\u6B65\u8FC7\u6EE4\u3002
having \u4E0D\u80FD\u5355\u72EC\u4F7F\u7528\uFF0C having \u4E0D\u80FD\u4EE3\u66FF where\uFF0C having \u5FC5\u987B\u548C group by \u8054\u5408\u4F7F\u7528\u3002

where \u548C having\uFF0C\u4F18\u5148\u9009\u62E9 where\uFF0C where \u5B9E\u5728\u5B8C\u6210\u4E0D\u4E86\uFF0C\u518D\u9009\u62E9 having\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8865\u5145\u4E00\u70B9</p></blockquote><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u5C06\u4E4B\u524D\u7684\u5173\u952E\u5B57\u5168\u90E8\u7EC4\u5408\u5728\u4E00\u8D77\uFF0C\u6765\u770B\u4E00\u4E0B\u4ED6\u4EEC\u7684\u6267\u884C\u987A\u5E8F\uFF1F
    select
      	...
    from
     	...
    where
    	...
    group by
     	...
	having
		...
    order by
     	...
\u4EE5\u4E0A\u5173\u952E\u5B57\u7684\u987A\u5E8F\u4E0D\u80FD\u98A0\u5012\uFF0C\u9700\u8981\u8BB0\u5FC6\u3002
\u6267\u884C\u987A\u5E8F\u662F\u4EC0\u4E48\uFF1F
  1. from
  2. where
  3. group by
  4. having
  5. select
  6. order by
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FDE\u63A5\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u67E5\u8BE2" aria-hidden="true">#</a> \u8FDE\u63A5\u67E5\u8BE2</h3><p>\u591A\u5F20\u8868\u8054\u5408\u8D77\u6765\u67E5\u8BE2\u6570\u636E\uFF0C\u88AB\u79F0\u4E3A\u8FDE\u63A5\u67E5\u8BE2\u3002</p><p>\u6839\u636E\u8868\u8FDE\u63A5\u7684\u65B9\u5F0F\u5206\u7C7B\uFF1A \u5185\u8FDE\u63A5\uFF1A\u7B49\u503C\u8FDE\u63A5 \u975E\u7B49\u503C\u8FDE\u63A5 \u81EA\u8FDE\u63A5 \u5916\u8FDE\u63A5\uFF1A\u5DE6\u5916\u8FDE\u63A5\uFF08\u5DE6\u8FDE\u63A5\uFF09\u53F3\u5916\u8FDE\u63A5\uFF08\u53F3\u8FDE\u63A5\uFF09 \u5168\u8FDE\u63A5\uFF1A\u5F88\u5C11\u4F7F\u7528</p><h4 id="\u5185\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u5185\u8FDE\u63A5" aria-hidden="true">#</a> \u5185\u8FDE\u63A5</h4><h5 id="\u7B49\u503C\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u7B49\u503C\u8FDE\u63A5" aria-hidden="true">#</a> \u7B49\u503C\u8FDE\u63A5</h5><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u8BED\u6CD5\uFF1A
  select 
    ...
  from
    a
  inner join
    b
  on
    a\u548Cb\u7684\u8FDE\u63A5\u6761\u4EF6
  where
    \u7B5B\u9009\u6761\u4EF6
# inner\u53EF\u4EE5\u7701\u7565\uFF08\u5E26\u7740inner\u53EF\u8BFB\u6027\u66F4\u597D\uFF01\uFF01\uFF01\u4E00\u773C\u5C31\u80FD\u770B\u51FA\u6765\u662F\u5185\u8FDE\u63A5\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u975E\u7B49\u503C\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u975E\u7B49\u503C\u8FDE\u63A5" aria-hidden="true">#</a> \u975E\u7B49\u503C\u8FDE\u63A5</h5><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select 
	e.ename, e.sal, s.grade
from
	emp e
join
	salgrade s
on
	e.sal between s.losal and s.hisal; // \u6761\u4EF6\u4E0D\u662F\u4E00\u4E2A\u7B49\u91CF\u5173\u7CFB\uFF0C\u79F0\u4E3A\u975E\u7B49\u503C\u8FDE\u63A5\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="\u81EA\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u81EA\u8FDE\u63A5" aria-hidden="true">#</a> \u81EA\u8FDE\u63A5</h5><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select 
	a.ename as &#39;\u5458\u5DE5\u540D&#39;, b.ename as &#39;\u9886\u5BFC\u540D&#39;
from
	emp a
join
	emp b
on
	a.mgr = b.empno; 
//\u5458\u5DE5\u7684\u9886\u5BFC\u7F16\u53F7 = \u9886\u5BFC\u7684\u5458\u5DE5\u7F16\u53F7
\u4EE5\u4E0A\u5C31\u662F\u5185\u8FDE\u63A5\u4E2D\u7684\uFF1A\u81EA\u8FDE\u63A5\uFF0C\u6280\u5DE7\uFF1A\u4E00\u5F20\u8868\u770B\u505A\u4E24\u5F20\u8868
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5916\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u5916\u8FDE\u63A5" aria-hidden="true">#</a> \u5916\u8FDE\u63A5</h4><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>// outer\u662F\u53EF\u4EE5\u7701\u7565\u7684\uFF0C\u5E26\u7740\u53EF\u8BFB\u6027\u5F3A\u3002
select 
	e.ename,d.dname
from
	emp e 
right outer join 
	dept d
on
	e.deptno = d.deptno;
	
right \u4EE3\u8868\u4EC0\u4E48\uFF1A\u8868\u793A\u5C06 join \u5173\u952E\u5B57\u53F3\u8FB9\u7684\u8FD9\u5F20\u8868\u770B\u6210\u4E3B\u8868\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u5C06\u8FD9\u5F20\u8868\u7684\u6570\u636E\u5168\u90E8\u67E5\u8BE2\u51FA\u6765\uFF0C\u634E\u5E26\u7740\u5173\u8054\u67E5\u8BE2\u5DE6\u8FB9\u7684\u8868\u3002\u5728\u5916\u8FDE\u63A5\u5F53\u4E2D\uFF0C\u4E24\u5F20\u8868\u8FDE\u63A5\uFF0C\u4EA7\u751F\u4E86\u4E3B\u6B21\u5173\u7CFB\u3002

\u5E26\u6709 right \u7684\u662F\u53F3\u5916\u8FDE\u63A5\uFF0C\u53C8\u53EB\u505A\u53F3\u8FDE\u63A5\uFF0C\u5E26\u6709 left \u7684\u662F\u5DE6\u5916\u8FDE\u63A5\uFF0C\u53C8\u53EB\u505A\u5DE6\u8FDE\u63A5\u3002
\u4EFB\u4F55\u4E00\u4E2A\u53F3\u8FDE\u63A5\u90FD\u6709\u5DE6\u8FDE\u63A5\u7684\u5199\u6CD5\uFF0C\u4EFB\u4F55\u4E00\u4E2A\u5DE6\u8FDE\u63A5\u90FD\u6709\u53F3\u8FDE\u63A5\u7684\u5199\u6CD5\u3002

\u601D\u8003\uFF1A\u5916\u8FDE\u63A5\u7684\u67E5\u8BE2\u7ED3\u679C\u6761\u6570\u4E00\u5B9A\u662F &gt;= \u5185\u8FDE\u63A5\u7684\u67E5\u8BE2\u7ED3\u679C\u6761\u6570\uFF1F
	\u6B63\u786E\u3002
	
\u4E09\u5F20\u8868\uFF0C\u56DB\u5F20\u8868\u600E\u4E48\u8FDE\u63A5\uFF1F
\u8BED\u6CD5\uFF1A
  select 
    ...
  from
    a
  join
    b
  on
    a\u548Cb\u7684\u8FDE\u63A5\u6761\u4EF6
  join
    c
  on
    a\u548Cc\u7684\u8FDE\u63A5\u6761\u4EF6
  right join
    d
  on
    a\u548Cd\u7684\u8FDE\u63A5\u6761\u4EF6
  
  \u4E00\u6761SQL\u4E2D\u5185\u8FDE\u63A5\u548C\u5916\u8FDE\u63A5\u53EF\u4EE5\u6DF7\u5408\u3002\u90FD\u53EF\u4EE5\u51FA\u73B0\uFF01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B50\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5B50\u67E5\u8BE2" aria-hidden="true">#</a> \u5B50\u67E5\u8BE2</h3><p>select\u8BED\u53E5\u4E2D\u5D4C\u5957select\u8BED\u53E5\uFF0C\u88AB\u5D4C\u5957\u7684select\u8BED\u53E5\u79F0\u4E3A\u5B50\u67E5\u8BE2\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u5B50\u67E5\u8BE2\u90FD\u53EF\u4EE5\u51FA\u73B0\u5728\u54EA\u91CC\u5462\uFF1F
select
  ..(select).
from
  ..(select).
where
  ..(select).
  
  
where\u5B50\u53E5\u4E2D\u7684\u5B50\u67E5\u8BE2:

\u7B2C\u4E00\u6B65\uFF1A\u67E5\u8BE2\u6700\u4F4E\u5DE5\u8D44\u662F\u591A\u5C11
  select min(sal) from emp;
  +----------+
  | min(sal) |
  +----------+
  |   800.00 |
  +----------+
\u7B2C\u4E8C\u6B65\uFF1A\u627E\u51FA&gt;800\u7684
  select ename,sal from emp where sal &gt; 800;

\u7B2C\u4E09\u6B65\uFF1A\u5408\u5E76
  select ename,sal from emp where sal &gt; (select min(sal) from emp);
  
from\u5B50\u53E5\u4E2D\u7684\u5B50\u67E5\u8BE2:
	\u6CE8\u610F\uFF1Afrom\u540E\u9762\u7684\u5B50\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u5C06\u5B50\u67E5\u8BE2\u7684\u67E5\u8BE2\u7ED3\u679C\u5F53\u505A\u4E00\u5F20\u4E34\u65F6\u8868\u3002

select\u540E\u9762\u51FA\u73B0\u7684\u5B50\u67E5\u8BE2\uFF08\u8FD9\u4E2A\u5185\u5BB9\u4E0D\u9700\u8981\u638C\u63E1\uFF0C\u4E86\u89E3\u5373\u53EF\uFF01\uFF01\uFF01\uFF09
	\u6CE8\u610F\uFF1A\u5BF9\u4E8Eselect\u540E\u9762\u7684\u5B50\u67E5\u8BE2\u6765\u8BF4\uFF0C\u8FD9\u4E2A\u5B50\u67E5\u8BE2\u53EA\u80FD\u4E00\u6B21\u8FD4\u56DE1\u6761\u7ED3\u679C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="union-\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#union-\u5408\u5E76" aria-hidden="true">#</a> union \u5408\u5E76</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u6848\u4F8B\uFF1A\u67E5\u8BE2\u5DE5\u4F5C\u5C97\u4F4D\u662FMANAGER\u548CSALESMAN\u7684\u5458\u5DE5\uFF1F
select ename,job from emp where job = &#39;MANAGER&#39; or job = &#39;SALESMAN&#39;;
select ename,job from emp where job in(&#39;MANAGER&#39;,&#39;SALESMAN&#39;);
+--------+----------+
| ename  | job      |
+--------+----------+
| ALLEN  | SALESMAN |
| WARD   | SALESMAN |
| JONES  | MANAGER  |
| MARTIN | SALESMAN |
| BLAKE  | MANAGER  |
| CLARK  | MANAGER  |
| TURNER | SALESMAN |
+--------+----------+

select ename,job from emp where job = &#39;MANAGER&#39;
union
select ename,job from emp where job = &#39;SALESMAN&#39;;

+--------+----------+
| ename  | job      |
+--------+----------+
| JONES  | MANAGER  |
| BLAKE  | MANAGER  |
| CLARK  | MANAGER  |
| ALLEN  | SALESMAN |
| WARD   | SALESMAN |
| MARTIN | SALESMAN |
| TURNER | SALESMAN |
+--------+----------+
union\u7684\u6548\u7387\u8981\u9AD8\u4E00\u4E9B\u3002\u5BF9\u4E8E\u8868\u8FDE\u63A5\u6765\u8BF4\uFF0C\u6BCF\u8FDE\u63A5\u4E00\u6B21\u65B0\u8868\uFF0C\u5219\u5339\u914D\u7684\u6B21\u6570\u6EE1\u8DB3\u7B1B\u5361\u5C14\u79EF\uFF0C\u6210\u500D\u7684\u7FFB\u3002\u4F46\u662Funion\u53EF\u4EE5\u51CF\u5C11\u5339\u914D\u7684\u6B21\u6570\u3002\u5728\u51CF\u5C11\u5339\u914D\u6B21\u6570\u7684\u60C5\u51B5\u4E0B\uFF0C\u8FD8\u53EF\u4EE5\u5B8C\u6210\u4E24\u4E2A\u7ED3\u679C\u96C6\u7684\u62FC\u63A5\u3002

a \u8FDE\u63A5 b \u8FDE\u63A5 c
a 10\u6761\u8BB0\u5F55
b 10\u6761\u8BB0\u5F55
c 10\u6761\u8BB0\u5F55
\u5339\u914D\u6B21\u6570\u662F\uFF1A1000

a \u8FDE\u63A5 b\u4E00\u4E2A\u7ED3\u679C\uFF1A10 * 10 --&gt; 100\u6B21
a \u8FDE\u63A5 c\u4E00\u4E2A\u7ED3\u679C\uFF1A10 * 10 --&gt; 100\u6B21
\u4F7F\u7528union\u7684\u8BDD\u662F\uFF1A100\u6B21 + 100\u6B21 = 200\u6B21\u3002\uFF08union\u628A\u4E58\u6CD5\u53D8\u6210\u4E86\u52A0\u6CD5\u8FD0\u7B97\uFF09

union\u5728\u4F7F\u7528\u7684\u65F6\u5019\u6709\u6CE8\u610F\u4E8B\u9879\u5417\uFF1F

//\u9519\u8BEF\u7684\uFF1Aunion\u5728\u8FDB\u884C\u7ED3\u679C\u96C6\u5408\u5E76\u7684\u65F6\u5019\uFF0C\u8981\u6C42\u4E24\u4E2A\u7ED3\u679C\u96C6\u7684\u5217\u6570\u76F8\u540C\u3002
select ename,job from emp where job = &#39;MANAGER&#39;
union
select ename from emp where job = &#39;SALESMAN&#39;;

// MYSQL\u53EF\u4EE5\uFF0Coracle\u8BED\u6CD5\u4E25\u683C \uFF0C\u4E0D\u53EF\u4EE5\uFF0C\u62A5\u9519\u3002\u8981\u6C42\uFF1A\u7ED3\u679C\u96C6\u5408\u5E76\u65F6\u5217\u548C\u5217\u7684\u6570\u636E\u7C7B\u578B\u4E5F\u8981\u4E00\u81F4\u3002
select ename,job from emp where job = &#39;MANAGER&#39;
union
select ename,sal from emp where job = &#39;SALESMAN&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="limit" tabindex="-1"><a class="header-anchor" href="#limit" aria-hidden="true">#</a> limit</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>limit \u4F5C\u7528\uFF1A\u5C06\u67E5\u8BE2\u7ED3\u679C\u96C6\u7684\u4E00\u90E8\u5206\u53D6\u51FA\u6765\u3002\u901A\u5E38\u4F7F\u7528\u5728\u5206\u9875\u67E5\u8BE2\u5F53\u4E2D\u3002
\u767E\u5EA6\u9ED8\u8BA4\uFF1A\u4E00\u9875\u663E\u793A10\u6761\u8BB0\u5F55\u3002
\u5206\u9875\u7684\u4F5C\u7528\u662F\u4E3A\u4E86\u63D0\u9AD8\u7528\u6237\u7684\u4F53\u9A8C\uFF0C\u56E0\u4E3A\u4E00\u6B21\u5168\u90E8\u90FD\u67E5\u51FA\u6765\uFF0C\u7528\u6237\u4F53\u9A8C\u5DEE\u3002

limit\u7684\u4F7F\u7528
\u5B8C\u6574\u7528\u6CD5\uFF1Alimit startIndex, length
  startIndex\u662F\u8D77\u59CB\u4E0B\u6807\uFF0Clength\u662F\u957F\u5EA6\u3002
  \u8D77\u59CB\u4E0B\u6807\u4ECE0\u5F00\u59CB\u3002

\u7F3A\u7701\u7528\u6CD5\uFF1Alimit 5; \u8FD9\u662F\u53D6\u524D5

\u6CE8\u610F\uFF1Amysql\u5F53\u4E2Dlimit\u5728order by\u4E4B\u540E\u6267\u884C\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01

\u5206\u9875
\u6BCF\u9875\u663E\u793A3\u6761\u8BB0\u5F55
\u7B2C1\u9875\uFF1Alimit 0,3		[0 1 2]
\u7B2C2\u9875\uFF1Alimit 3,3		[3 4 5]
\u7B2C3\u9875\uFF1Alimit 6,3		[6 7 8]
\u7B2C4\u9875\uFF1Alimit 9,3		[9 10 11]

\u6BCF\u9875\u663E\u793ApageSize\u6761\u8BB0\u5F55
\u7B2CpageNo\u9875\uFF1Alimit (pageNo - 1) * pageSize  , pageSize

public static void main(String[] args){
  // \u7528\u6237\u63D0\u4EA4\u8FC7\u6765\u4E00\u4E2A\u9875\u7801\uFF0C\u4EE5\u53CA\u6BCF\u9875\u663E\u793A\u7684\u8BB0\u5F55\u6761\u6570
  int pageNo = 5; //\u7B2C5\u9875
  int pageSize = 10; //\u6BCF\u9875\u663E\u793A10\u6761

  int startIndex = (pageNo - 1) * pageSize;
  String sql = &quot;select ...limit &quot; + startIndex + &quot;, &quot; + pageSize;
}

\u8BB0\u516C\u5F0F\uFF1A
limit (pageNo - 1) * pageSize , pageSize
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u5173\u4E8EDQL\u8BED\u53E5\u7684\u603B\u7ED3\uFF1A
select 
  ...
from
  ...
where
  ...
group by
  ...
having
  ...
order by
  ...
limit
  ...

\u6267\u884C\u987A\u5E8F\uFF1F
  1.from
  2.where
  3.group by
  4.having
  5.select
  6.order by
  7.limit..
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63D2\u5165\u6570\u636Einsert" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u6570\u636Einsert" aria-hidden="true">#</a> \u63D2\u5165\u6570\u636Einsert</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u63D2\u5165\u6570\u636Einsert \uFF08DML\uFF09
	
\u8BED\u6CD5\u683C\u5F0F\uFF1A
  insert into \u8868\u540D(\u5B57\u6BB5\u540D1,\u5B57\u6BB5\u540D2,\u5B57\u6BB5\u540D3...) values(\u503C1,\u503C2,\u503C3);

  \u6CE8\u610F\uFF1A\u5B57\u6BB5\u540D\u548C\u503C\u8981\u4E00\u4E00\u5BF9\u5E94\u3002\u4EC0\u4E48\u662F\u4E00\u4E00\u5BF9\u5E94\uFF1F
    \u6570\u91CF\u8981\u5BF9\u5E94\u3002\u6570\u636E\u7C7B\u578B\u8981\u5BF9\u5E94\u3002
    
insert\u8BED\u53E5\u4E2D\u7684\u201C\u5B57\u6BB5\u540D\u201D\u53EF\u4EE5\u7701\u7565\u5417\uFF1F\u53EF\u4EE5
  insert into t_student values(2); //\u9519\u8BEF\u7684

  // \u6CE8\u610F\uFF1A\u524D\u9762\u7684\u5B57\u6BB5\u540D\u7701\u7565\u7684\u8BDD\uFF0C\u7B49\u4E8E\u90FD\u5199\u4E0A\u4E86\uFF01\u6240\u4EE5\u503C\u4E5F\u8981\u90FD\u5199\u4E0A\uFF01
  insert into t_student values(2, &#39;lisi&#39;, &#39;f&#39;, 20, &#39;lisi@123.com&#39;);
  +------+------+------+------+--------------+
  | no   | name | sex  | age  | email        |
  +------+------+------+------+--------------+
  |    1 | NULL | m    | NULL | NULL         |
  |    2 | lisi | f    |   20 | lisi@123.com |
  +------+------+------+------+--------------+
 
\u4E00\u6B21\u53EF\u4EE5\u63D2\u5165\u591A\u6761\u8BB0\u5F55\uFF1A
  insert into t_user(id,name,birth,create_time) values
  (1,&#39;zs&#39;,&#39;1980-10-11&#39;,now()), 
  (2,&#39;lisi&#39;,&#39;1981-10-11&#39;,now()),
  (3,&#39;wangwu&#39;,&#39;1982-10-11&#39;,now());

\u8BED\u6CD5\uFF1Ainsert into t_user(\u5B57\u6BB5\u540D1,\u5B57\u6BB5\u540D2) values(),(),(),();

insert\u63D2\u5165\u65E5\u671F
	\u6570\u5B57\u683C\u5F0F\u5316\uFF1Aformat
	\u683C\u5F0F\u5316\u6570\u5B57\uFF1Aformat(\u6570\u5B57, &#39;\u683C\u5F0F&#39;)
  select ename,format(sal, &#39;$999,999&#39;) as sal from emp;

str_to_date\uFF1A\u5C06\u5B57\u7B26\u4E32varchar\u7C7B\u578B\u8F6C\u6362\u6210date\u7C7B\u578B
date_format\uFF1A\u5C06date\u7C7B\u578B\u8F6C\u6362\u6210\u5177\u6709\u4E00\u5B9A\u683C\u5F0F\u7684varchar\u5B57\u7B26\u4E32\u7C7B\u578B\u3002

\u63D2\u5165\u6570\u636E\uFF1F
insert into t_user(id,name,birth) values(1, &#39;zhangsan&#39;, &#39;01-10-1990&#39;); // 1990\u5E7410\u67081\u65E5
\u51FA\u95EE\u9898\u4E86\uFF1A\u539F\u56E0\u662F\u7C7B\u578B\u4E0D\u5339\u914D\u3002\u6570\u636E\u5E93birth\u662Fdate\u7C7B\u578B\uFF0C\u8FD9\u91CC\u7ED9\u4E86\u4E00\u4E2A\u5B57\u7B26\u4E32varchar\u3002

\u600E\u4E48\u529E\uFF1F\u53EF\u4EE5\u4F7F\u7528str_to_date\u51FD\u6570\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\u3002
str_to_date\u51FD\u6570\u53EF\u4EE5\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u6210\u65E5\u671F\u7C7B\u578Bdate\uFF1F
\u8BED\u6CD5\u683C\u5F0F\uFF1A
  str_to_date(&#39;\u5B57\u7B26\u4E32\u65E5\u671F&#39;, &#39;\u65E5\u671F\u683C\u5F0F&#39;)

mysql\u7684\u65E5\u671F\u683C\u5F0F\uFF1A
  %Y	\u5E74
  %m    \u6708
  %d    \u65E5
  %h	\u65F6
  %i	\u5206
  %s	\u79D2

insert into t_user(id,name,birth) values(1, &#39;zhangsan&#39;, str_to_date(&#39;01-10-1990&#39;,&#39;%d-%m-%Y&#39;));

str_to_date\u51FD\u6570\u53EF\u4EE5\u628A\u5B57\u7B26\u4E32varchar\u8F6C\u6362\u6210\u65E5\u671Fdate\u7C7B\u578B\u6570\u636E\uFF0C
\u901A\u5E38\u4F7F\u7528\u5728\u63D2\u5165insert\u65B9\u9762\uFF0C\u56E0\u4E3A\u63D2\u5165\u7684\u65F6\u5019\u9700\u8981\u4E00\u4E2A\u65E5\u671F\u7C7B\u578B\u7684\u6570\u636E\uFF0C
\u9700\u8981\u901A\u8FC7\u8BE5\u51FD\u6570\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u6210date\u3002

\u5982\u679C\u4F60\u63D0\u4F9B\u7684\u65E5\u671F\u5B57\u7B26\u4E32\u662F\u8FD9\u4E2A\u683C\u5F0F\uFF0Cstr_to_date\u51FD\u6570\u5C31\u4E0D\u9700\u8981\u4E86\uFF01\uFF01\uFF01
  %Y-%m-%d
insert into t_user(id,name,birth) values(2, &#39;lisi&#39;, &#39;1990-10-01&#39;);

\u67E5\u8BE2\u7684\u65F6\u5019\u53EF\u4EE5\u4EE5\u67D0\u4E2A\u7279\u5B9A\u7684\u65E5\u671F\u683C\u5F0F\u5C55\u793A\u5417\uFF1F
date_format
\u8FD9\u4E2A\u51FD\u6570\u53EF\u4EE5\u5C06\u65E5\u671F\u7C7B\u578B\u8F6C\u6362\u6210\u7279\u5B9A\u683C\u5F0F\u7684\u5B57\u7B26\u4E32\u3002

select id,name,date_format(birth, &#39;%m/%d/%Y&#39;) as birth from t_user;
+------+----------+------------+
| id   | name     | birth      |
+------+----------+------------+
|    1 | zhangsan | 10/01/1990 |
|    2 | lisi     | 10/01/1990 |
+------+----------+------------+

date_format\u51FD\u6570\u600E\u4E48\u7528\uFF1F
  date_format(\u65E5\u671F\u7C7B\u578B\u6570\u636E, &#39;\u65E5\u671F\u683C\u5F0F&#39;)
  \u8FD9\u4E2A\u51FD\u6570\u901A\u5E38\u4F7F\u7528\u5728\u67E5\u8BE2\u65E5\u671F\u65B9\u9762\u3002\u8BBE\u7F6E\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\u3002

mysql&gt; select id,name,birth from t_user;
+------+----------+------------+
| id   | name     | birth      |
+------+----------+------------+
|    1 | zhangsan | 1990-10-01 |
|    2 | lisi     | 1990-10-01 |
+------+----------+------------+
\u4EE5\u4E0A\u7684SQL\u8BED\u53E5\u5B9E\u9645\u4E0A\u662F\u8FDB\u884C\u4E86\u9ED8\u8BA4\u7684\u65E5\u671F\u683C\u5F0F\u5316\uFF0C
\u81EA\u52A8\u5C06\u6570\u636E\u5E93\u4E2D\u7684date\u7C7B\u578B\u8F6C\u6362\u6210varchar\u7C7B\u578B\u3002
\u5E76\u4E14\u91C7\u7528\u7684\u683C\u5F0F\u662Fmysql\u9ED8\u8BA4\u7684\u65E5\u671F\u683C\u5F0F\uFF1A&#39;%Y-%m-%d&#39;

select id,name,date_format(birth,&#39;%Y/%m/%d&#39;) as birth from t_user;

java\u4E2D\u7684\u65E5\u671F\u683C\u5F0F\uFF1F
  yyyy-MM-dd HH:mm:ss SSS

date\u548Cdatetime\u4E24\u4E2A\u7C7B\u578B\u7684\u533A\u522B\uFF1F
	date\u662F\u77ED\u65E5\u671F\uFF1A\u53EA\u5305\u62EC\u5E74\u6708\u65E5\u4FE1\u606F\u3002
	datetime\u662F\u957F\u65E5\u671F\uFF1A\u5305\u62EC\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u4FE1\u606F\u3002
	mysql\u77ED\u65E5\u671F\u9ED8\u8BA4\u683C\u5F0F\uFF1A%Y-%m-%d
	mysql\u957F\u65E5\u671F\u9ED8\u8BA4\u683C\u5F0F\uFF1A%Y-%m-%d %h:%i:%s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539update" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539update" aria-hidden="true">#</a> \u4FEE\u6539update</h2><div class="language-msyql ext-msyql line-numbers-mode"><pre class="language-msyql"><code>\u8BED\u6CD5\u683C\u5F0F\uFF1A
update \u8868\u540D set \u5B57\u6BB5\u540D1=\u503C1,\u5B57\u6BB5\u540D2=\u503C2,\u5B57\u6BB5\u540D3=\u503C3... where \u6761\u4EF6;

\u6CE8\u610F\uFF1A\u6CA1\u6709\u6761\u4EF6\u9650\u5236\u4F1A\u5BFC\u81F4\u6240\u6709\u6570\u636E\u5168\u90E8\u66F4\u65B0\u3002

update t_user set name = &#39;jack&#39;, birth = &#39;2000-10-11&#39; where id = 2;
+------+----------+------------+---------------------+
| id   | name     | birth      | create_time         |
+------+----------+------------+---------------------+
|    1 | zhangsan | 1990-10-01 | 2020-03-18 15:49:50 |
|    2 | jack     | 2000-10-11 | 2020-03-18 15:51:23 |
+------+----------+------------+---------------------+

update t_user set name = &#39;jack&#39;, birth = &#39;2000-10-11&#39;, create_time = now() where id = 2;

\u66F4\u65B0\u6240\u6709\uFF1F
  update t_user set name = &#39;abc&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5220\u9664\u6570\u636E-delete" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6570\u636E-delete" aria-hidden="true">#</a> \u5220\u9664\u6570\u636E delete</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u8BED\u6CD5\uFF1A
  delete from \u8868\u540D where \u6761\u4EF6;

\u6CE8\u610F\uFF1A\u6CA1\u6709\u6761\u4EF6\uFF0C\u6574\u5F20\u8868\u7684\u6570\u636E\u4F1A\u5168\u90E8\u5220\u9664\uFF01

delete from t_user where id = 2;

insert into t_user(id) values(2);

delete from t_user; // \u5220\u9664\u6240\u6709\uFF01

\u5FEB\u901F\u5220\u9664\u8868\u4E2D\u7684\u6570\u636E\uFF1F\u3010truncate\u6BD4\u8F83\u91CD\u8981\uFF0C\u5FC5\u987B\u638C\u63E1\u3011

//\u5220\u9664dept_bak\u8868\u4E2D\u7684\u6570\u636E
delete from dept_bak; //\u8FD9\u79CD\u5220\u9664\u6570\u636E\u7684\u65B9\u5F0F\u6BD4\u8F83\u6162\u3002

mysql&gt; select * from dept_bak;
Empty set (0.00 sec)

delete\u8BED\u53E5\u5220\u9664\u6570\u636E\u7684\u539F\u7406\uFF1F\uFF08delete\u5C5E\u4E8EDML\u8BED\u53E5\uFF01\uFF01\uFF01\uFF09
  \u8868\u4E2D\u7684\u6570\u636E\u88AB\u5220\u9664\u4E86\uFF0C\u4F46\u662F\u8FD9\u4E2A\u6570\u636E\u5728\u786C\u76D8\u4E0A\u7684\u771F\u5B9E\u5B58\u50A8\u7A7A\u95F4\u4E0D\u4F1A\u88AB\u91CA\u653E\uFF01\uFF01\uFF01
  \u8FD9\u79CD\u5220\u9664\u7F3A\u70B9\u662F\uFF1A\u5220\u9664\u6548\u7387\u6BD4\u8F83\u4F4E\u3002
  \u8FD9\u79CD\u5220\u9664\u4F18\u70B9\u662F\uFF1A\u652F\u6301\u56DE\u6EDA\uFF0C\u540E\u6094\u4E86\u53EF\u4EE5\u518D\u6062\u590D\u6570\u636E\uFF01\uFF01\uFF01

truncate\u8BED\u53E5\u5220\u9664\u6570\u636E\u7684\u539F\u7406\uFF1F
  \u8FD9\u79CD\u5220\u9664\u6548\u7387\u6BD4\u8F83\u9AD8\uFF0C\u8868\u88AB\u4E00\u6B21\u622A\u65AD\uFF0C\u7269\u7406\u5220\u9664\u3002
  \u8FD9\u79CD\u5220\u9664\u7F3A\u70B9\uFF1A\u4E0D\u652F\u6301\u56DE\u6EDA\u3002
  \u8FD9\u79CD\u5220\u9664\u4F18\u70B9\uFF1A\u5FEB\u901F\u3002

\u7528\u6CD5\uFF1Atruncate table dept_bak; \uFF08\u8FD9\u79CD\u64CD\u4F5C\u5C5E\u4E8EDDL\u64CD\u4F5C\u3002\uFF09

\u5927\u8868\u975E\u5E38\u5927\uFF0C\u4E0A\u4EBF\u6761\u8BB0\u5F55\uFF1F
  \u5220\u9664\u7684\u65F6\u5019\uFF0C\u4F7F\u7528delete\uFF0C\u4E5F\u8BB8\u9700\u8981\u6267\u884C1\u4E2A\u5C0F\u65F6\u624D\u80FD\u5220\u9664\u5B8C\uFF01\u6548\u7387\u8F83\u4F4E\u3002
  \u53EF\u4EE5\u9009\u62E9\u4F7F\u7528truncate\u5220\u9664\u8868\u4E2D\u7684\u6570\u636E\u3002\u53EA\u9700\u8981\u4E0D\u52301\u79D2\u949F\u7684\u65F6\u95F4\u5C31\u5220\u9664\u7ED3\u675F\u3002\u6548\u7387\u8F83\u9AD8\u3002
  \u4F46\u662F\u4F7F\u7528truncate\u4E4B\u524D\uFF0C\u5FC5\u987B\u4ED4\u7EC6\u8BE2\u95EE\u5BA2\u6237\u662F\u5426\u771F\u7684\u8981\u5220\u9664\uFF0C\u5E76\u8B66\u544A\u5220\u9664\u4E4B\u540E\u4E0D\u53EF\u6062\u590D\uFF01

  truncate\u662F\u5220\u9664\u8868\u4E2D\u7684\u6570\u636E\uFF0C\u8868\u8FD8\u5728\uFF01

\u5220\u9664\u8868\u64CD\u4F5C\uFF1F
  drop table \u8868\u540D; // \u8FD9\u4E0D\u662F\u5220\u9664\u8868\u4E2D\u7684\u6570\u636E\uFF0C\u8FD9\u662F\u628A\u8868\u5220\u9664\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u7EA6\u675F" aria-hidden="true">#</a> \u7EA6\u675F</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u4EC0\u4E48\u662F\u7EA6\u675F\uFF1F
\u7EA6\u675F\u5BF9\u5E94\u7684\u82F1\u8BED\u5355\u8BCD\uFF1A constraint
\u5728\u521B\u5EFA\u8868\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7ED9\u8868\u4E2D\u7684\u5B57\u6BB5\u52A0\u4E0A\u4E00\u4E9B\u7EA6\u675F\uFF0C\u6765\u4FDD\u8BC1\u8FD9\u4E2A\u8868\u4E2D\u6570\u636E\u7684
\u5B8C\u6574\u6027\u3001\u6709\u6548\u6027\uFF01\uFF01\uFF01

\u7EA6\u675F\u7684\u4F5C\u7528\u5C31\u662F\u4E3A\u4E86\u4FDD\u8BC1\uFF1A\u8868\u4E2D\u7684\u6570\u636E\u6709\u6548\uFF01\uFF01

\u7EA6\u675F\u5305\u62EC\u54EA\u4E9B\uFF1F
\u975E\u7A7A\u7EA6\u675F\uFF1Anot null
\u552F\u4E00\u6027\u7EA6\u675F: unique
\u4E3B\u952E\u7EA6\u675F: primary key \uFF08\u7B80\u79F0PK\uFF09
\u5916\u952E\u7EA6\u675F\uFF1Aforeign key\uFF08\u7B80\u79F0FK\uFF09
\u68C0\u67E5\u7EA6\u675F\uFF1Acheck\uFF08mysql\u4E0D\u652F\u6301\uFF0Coracle\u652F\u6301\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u975E\u7A7A\u7EA6\u675F-not-null" tabindex="-1"><a class="header-anchor" href="#\u975E\u7A7A\u7EA6\u675F-not-null" aria-hidden="true">#</a> \u975E\u7A7A\u7EA6\u675F\uFF1Anot null</h3><p>\u552F\u4E00\u6027\u7EA6\u675Funique\u7EA6\u675F\u7684\u5B57\u6BB5\u4E0D\u80FD\u91CD\u590D\uFF0C\u4F46\u662F\u53EF\u4EE5\u4E3ANULL\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>drop table if exists t_vip;
create table t_vip(
  id int,
  name varchar(255) not null  // not null\u53EA\u6709\u5217\u7EA7\u7EA6\u675F\uFF0C\u6CA1\u6709\u8868\u7EA7\u7EA6\u675F\uFF01
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u552F\u4E00\u6027\u7EA6\u675F-unique" tabindex="-1"><a class="header-anchor" href="#\u552F\u4E00\u6027\u7EA6\u675F-unique" aria-hidden="true">#</a> \u552F\u4E00\u6027\u7EA6\u675F: unique</h3><p>\u552F\u4E00\u6027\u7EA6\u675Funique\u7EA6\u675F\u7684\u5B57\u6BB5\u4E0D\u80FD\u91CD\u590D\uFF0C\u4F46\u662F\u53EF\u4EE5\u4E3ANULL\u3002</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u552F\u4E00\u6027\u7EA6\u675Funique\u7EA6\u675F\u7684\u5B57\u6BB5\u4E0D\u80FD\u91CD\u590D\uFF0C\u4F46\u662F\u53EF\u4EE5\u4E3ANULL\u3002
drop table if exists t_vip;
create table t_vip(
  id int,
  name varchar(255) unique,
  email varchar(255)
);

\u5982\u4F55\u505A\u5230\u8054\u5408\u552F\u4E00\u7EA6\u675F
drop table if exists t_vip;
create table t_vip(
  id int,
  name varchar(255),
  email varchar(255),
  unique(name,email) // \u7EA6\u675F\u6CA1\u6709\u6DFB\u52A0\u5728\u5217\u7684\u540E\u9762\uFF0C\u8FD9\u79CD\u7EA6\u675F\u88AB\u79F0\u4E3A\u8868\u7EA7\u7EA6\u675F\u3002
);
name\u548Cemail\u4E24\u4E2A\u5B57\u6BB5\u8054\u5408\u8D77\u6765\u552F\u4E00
\u5728mysql\u5F53\u4E2D\uFF0C\u5982\u679C\u4E00\u4E2A\u5B57\u6BB5\u540C\u65F6\u88ABnot null\u548Cunique\u7EA6\u675F\u7684\u8BDD\uFF0C\u8BE5\u5B57\u6BB5\u81EA\u52A8\u53D8\u6210\u4E3B\u952E\u5B57\u6BB5\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E3B\u952E\u7EA6\u675F-primary-key" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u952E\u7EA6\u675F-primary-key" aria-hidden="true">#</a> \u4E3B\u952E\u7EA6\u675F: primary key</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u4E3B\u952E\u7EA6\u675F\u7684\u76F8\u5173\u672F\u8BED\uFF1F
  \u4E3B\u952E\u7EA6\u675F\uFF1A\u5C31\u662F\u4E00\u79CD\u7EA6\u675F\u3002
  \u4E3B\u952E\u5B57\u6BB5\uFF1A\u8BE5\u5B57\u6BB5\u4E0A\u6DFB\u52A0\u4E86\u4E3B\u952E\u7EA6\u675F\uFF0C\u8FD9\u6837\u7684\u5B57\u6BB5\u53EB\u505A\uFF1A\u4E3B\u952E\u5B57\u6BB5
  \u4E3B\u952E\u503C\uFF1A\u4E3B\u952E\u5B57\u6BB5\u4E2D\u7684\u6BCF\u4E00\u4E2A\u503C\u90FD\u53EB\u505A\uFF1A\u4E3B\u952E\u503C\u3002

\u4EC0\u4E48\u662F\u4E3B\u952E\uFF1F\u6709\u5565\u7528\uFF1F
  \u4E3B\u952E\u503C\u662F\u6BCF\u4E00\u884C\u8BB0\u5F55\u7684\u552F\u4E00\u6807\u8BC6\u3002
  \u4E3B\u952E\u503C\u662F\u6BCF\u4E00\u884C\u8BB0\u5F55\u7684\u8EAB\u4EFD\u8BC1\u53F7\uFF01\uFF01\uFF01

\u8BB0\u4F4F\uFF1A\u4EFB\u4F55\u4E00\u5F20\u8868\u90FD\u5E94\u8BE5\u6709\u4E3B\u952E\uFF0C\u6CA1\u6709\u4E3B\u952E\uFF0C\u8868\u65E0\u6548\uFF01\uFF01

\u4E3B\u952E\u7684\u7279\u5F81\uFF1Anot null + unique\uFF08\u4E3B\u952E\u503C\u4E0D\u80FD\u662FNULL\uFF0C\u540C\u65F6\u4E5F\u4E0D\u80FD\u91CD\u590D\uFF01\uFF09

\u600E\u4E48\u7ED9\u4E00\u5F20\u8868\u6DFB\u52A0\u4E3B\u952E\u7EA6\u675F\u5462\uFF1F
  drop table if exists t_vip;
  // 1\u4E2A\u5B57\u6BB5\u505A\u4E3B\u952E\uFF0C\u53EB\u505A\uFF1A\u5355\u4E00\u4E3B\u952E
  create table t_vip(
    id int primary key,  //\u5217\u7EA7\u7EA6\u675F
    name varchar(255)
  );

\u8868\u7EA7\u7EA6\u675F\u4E3B\u8981\u662F\u7ED9\u591A\u4E2A\u5B57\u6BB5\u8054\u5408\u8D77\u6765\u6DFB\u52A0\u7EA6\u675F\uFF1F
  drop table if exists t_vip;
  // id\u548Cname\u8054\u5408\u8D77\u6765\u505A\u4E3B\u952E\uFF1A\u590D\u5408\u4E3B\u952E\uFF01\uFF01\uFF01\uFF01
  create table t_vip(
    id int,
    name varchar(255),
    email varchar(255),
    primary key(id,name)
  );
  
\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF1A\u590D\u5408\u4E3B\u952E\u3002\u5EFA\u8BAE\u4F7F\u7528\u5355\u4E00\u4E3B\u952E\uFF01
\u56E0\u4E3A\u4E3B\u952E\u503C\u5B58\u5728\u7684\u610F\u4E49\u5C31\u662F\u8FD9\u884C\u8BB0\u5F55\u7684\u8EAB\u4EFD\u8BC1\u53F7\uFF0C\u53EA\u8981\u610F\u4E49\u8FBE\u5230\u5373\u53EF\uFF0C\u5355\u4E00\u4E3B\u952E\u53EF\u4EE5\u505A\u5230\u3002
\u590D\u5408\u4E3B\u952E\u6BD4\u8F83\u590D\u6742\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF01\uFF01\uFF01

\u4E3B\u952E\u503C\u5EFA\u8BAE\u4F7F\u7528\uFF1A
  int
  bigint
  char
  \u7B49\u7C7B\u578B\u3002

\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF1Avarchar\u6765\u505A\u4E3B\u952E\u3002\u4E3B\u952E\u503C\u4E00\u822C\u90FD\u662F\u6570\u5B57\uFF0C\u4E00\u822C\u90FD\u662F\u5B9A\u957F\u7684\uFF01

\u4E3B\u952E\u9664\u4E86\uFF1A\u5355\u4E00\u4E3B\u952E\u548C\u590D\u5408\u4E3B\u952E\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u8FD9\u6837\u8FDB\u884C\u5206\u7C7B\uFF1F
  \u81EA\u7136\u4E3B\u952E\uFF1A\u4E3B\u952E\u503C\u662F\u4E00\u4E2A\u81EA\u7136\u6570\uFF0C\u548C\u4E1A\u52A1\u6CA1\u5173\u7CFB\u3002
  \u4E1A\u52A1\u4E3B\u952E\uFF1A\u4E3B\u952E\u503C\u548C\u4E1A\u52A1\u7D27\u5BC6\u5173\u8054\uFF0C\u4F8B\u5982\u62FF\u94F6\u884C\u5361\u8D26\u53F7\u505A\u4E3B\u952E\u503C\u3002\u8FD9\u5C31\u662F\u4E1A\u52A1\u4E3B\u952E\uFF01

\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u4F7F\u7528\u4E1A\u52A1\u4E3B\u952E\u591A\uFF0C\u8FD8\u662F\u4F7F\u7528\u81EA\u7136\u4E3B\u952E\u591A\u4E00\u4E9B\uFF1F
  \u81EA\u7136\u4E3B\u952E\u4F7F\u7528\u6BD4\u8F83\u591A\uFF0C\u56E0\u4E3A\u4E3B\u952E\u53EA\u8981\u505A\u5230\u4E0D\u91CD\u590D\u5C31\u884C\uFF0C\u4E0D\u9700\u8981\u6709\u610F\u4E49\u3002
  \u4E1A\u52A1\u4E3B\u952E\u4E0D\u597D\uFF0C\u56E0\u4E3A\u4E3B\u952E\u4E00\u65E6\u548C\u4E1A\u52A1\u6302\u94A9\uFF0C\u90A3\u4E48\u5F53\u4E1A\u52A1\u53D1\u751F\u53D8\u52A8\u7684\u65F6\u5019\uFF0C
  \u53EF\u80FD\u4F1A\u5F71\u54CD\u5230\u4E3B\u952E\u503C\uFF0C\u6240\u4EE5\u4E1A\u52A1\u4E3B\u952E\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u3002\u5C3D\u91CF\u4F7F\u7528\u81EA\u7136\u4E3B\u952E\u3002
  
\u5728mysql\u5F53\u4E2D\uFF0C\u6709\u4E00\u79CD\u673A\u5236\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u81EA\u52A8\u7EF4\u62A4\u4E00\u4E2A\u4E3B\u952E\u503C\uFF1F
		drop table if exists t_vip;
		create table t_vip(
			id int primary key auto_increment, //auto_increment\u8868\u793A\u81EA\u589E\uFF0C\u4ECE1\u5F00\u59CB\uFF0C\u4EE51\u9012\u589E\uFF01
			name varchar(255)
		);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5916\u952E\u7EA6\u675F-foreign-key" tabindex="-1"><a class="header-anchor" href="#\u5916\u952E\u7EA6\u675F-foreign-key" aria-hidden="true">#</a> \u5916\u952E\u7EA6\u675F\uFF1Aforeign key</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u5916\u952E\u7EA6\u675F\u6D89\u53CA\u5230\u7684\u76F8\u5173\u672F\u8BED\uFF1A
  \u5916\u952E\u7EA6\u675F\uFF1A\u4E00\u79CD\u7EA6\u675F\uFF08foreign key\uFF09
  \u5916\u952E\u5B57\u6BB5\uFF1A\u8BE5\u5B57\u6BB5\u4E0A\u6DFB\u52A0\u4E86\u5916\u952E\u7EA6\u675F\u3002
  \u5916\u952E\u503C\uFF1A\u5916\u952E\u5B57\u6BB5\u5F53\u4E2D\u7684\u6BCF\u4E00\u4E2A\u503C\u3002
\u6CE8\u610F\uFF1A\u4E0D\u4E00\u5B9A\u662F\u4E3B\u952E\u4F46\u662F\u81F3\u5C11\u5177\u6709 unique \u7EA6\u675F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B58\u50A8\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#\u5B58\u50A8\u5F15\u64CE" aria-hidden="true">#</a> \u5B58\u50A8\u5F15\u64CE</h2><p>\u4EC0\u4E48\u662F\u5B58\u50A8\u5F15\u64CE\uFF0C\u6709\u4EC0\u4E48\u7528\u5462\uFF1F</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u5B58\u50A8\u5F15\u64CE\u662FMySQL\u4E2D\u7279\u6709\u7684\u4E00\u4E2A\u672F\u8BED\uFF0C\u5176\u5B83\u6570\u636E\u5E93\u4E2D\u6CA1\u6709\u3002\uFF08Oracle\u4E2D\u6709\uFF0C\u4F46\u662F\u4E0D\u53EB\u8FD9\u4E2A\u540D\u5B57\uFF09
\u5B58\u50A8\u5F15\u64CE\u8FD9\u4E2A\u540D\u5B57\u9AD8\u7AEF\u5927\u6C14\u4E0A\u6863\u6B21\u3002\u5B9E\u9645\u4E0A\u5B58\u50A8\u5F15\u64CE\u662F\u4E00\u4E2A\u8868\u5B58\u50A8/\u7EC4\u7EC7\u6570\u636E\u7684\u65B9\u5F0F\u3002
\u4E0D\u540C\u7684\u5B58\u50A8\u5F15\u64CE\uFF0C\u8868\u5B58\u50A8\u6570\u636E\u7684\u65B9\u5F0F\u4E0D\u540C\u3002

\u600E\u4E48\u7ED9\u8868\u6DFB\u52A0/\u6307\u5B9A\u201C\u5B58\u50A8\u5F15\u64CE\u201D\u5462\uFF1F
show create table t_student;

\u53EF\u4EE5\u5728\u5EFA\u8868\u7684\u65F6\u5019\u7ED9\u8868\u6307\u5B9A\u5B58\u50A8\u5F15\u64CE\u3002
CREATE TABLE \`t_student\` (
  \`no\` int(11) NOT NULL AUTO_INCREMENT,
  \`name\` varchar(255) DEFAULT NULL,
  \`cno\` int(11) DEFAULT NULL,
  PRIMARY KEY (\`no\`),
  KEY \`cno\` (\`cno\`),
  CONSTRAINT \`t_student_ibfk_1\` FOREIGN KEY (\`cno\`) REFERENCES \`t_class\` (\`classno\`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8

\u5728\u5EFA\u8868\u7684\u65F6\u5019\u53EF\u4EE5\u5728\u6700\u540E\u5C0F\u62EC\u53F7\u7684&quot;)&quot;\u7684\u53F3\u8FB9\u4F7F\u7528\uFF1A
  ENGINE\u6765\u6307\u5B9A\u5B58\u50A8\u5F15\u64CE\u3002
  CHARSET\u6765\u6307\u5B9A\u8FD9\u5F20\u8868\u7684\u5B57\u7B26\u7F16\u7801\u65B9\u5F0F\u3002
	
\u7ED3\u8BBA\uFF1A
  mysql\u9ED8\u8BA4\u7684\u5B58\u50A8\u5F15\u64CE\u662F\uFF1AInnoDB
  mysql\u9ED8\u8BA4\u7684\u5B57\u7B26\u7F16\u7801\u65B9\u5F0F\u662F\uFF1Autf8
  
\u600E\u4E48\u67E5\u770Bmysql\u652F\u6301\u54EA\u4E9B\u5B58\u50A8\u5F15\u64CE\u5462\uFF1F
\u547D\u4EE4\uFF1A show engines \\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="myisam-\u5B58\u50A8\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#myisam-\u5B58\u50A8\u5F15\u64CE" aria-hidden="true">#</a> MyISAM \u5B58\u50A8\u5F15\u64CE</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u5B83\u7BA1\u7406\u7684\u8868\u5177\u6709\u4EE5\u4E0B\u7279\u5F81\uFF1A
  \u4F7F\u7528\u4E09\u4E2A\u6587\u4EF6\u8868\u793A\u6BCF\u4E2A\u8868\uFF1A
    \u683C\u5F0F\u6587\u4EF6 \u2014 \u5B58\u50A8\u8868\u7ED3\u6784\u7684\u5B9A\u4E49\uFF08mytable.frm\uFF09
    \u6570\u636E\u6587\u4EF6 \u2014 \u5B58\u50A8\u8868\u884C\u7684\u5185\u5BB9\uFF08mytable.MYD\uFF09
    \u7D22\u5F15\u6587\u4EF6 \u2014 \u5B58\u50A8\u8868\u4E0A\u7D22\u5F15\uFF08mytable.MYI\uFF09\uFF1A\u7D22\u5F15\u662F\u4E00\u672C\u4E66\u7684\u76EE\u5F55\uFF0C\u7F29\u5C0F\u626B\u63CF\u8303\u56F4\uFF0C\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u7684\u4E00\u79CD\u673A\u5236\u3002
  \u53EF\u88AB\u8F6C\u6362\u4E3A\u538B\u7F29\u3001\u53EA\u8BFB\u8868\u6765\u8282\u7701\u7A7A\u95F4

  \u63D0\u793A\u4E00\u4E0B\uFF1A
    \u5BF9\u4E8E\u4E00\u5F20\u8868\u6765\u8BF4\uFF0C\u53EA\u8981\u662F\u4E3B\u952E\uFF0C\u6216\u8005\u52A0\u6709 unique \u7EA6\u675F\u7684\u5B57\u6BB5\u4E0A\u4F1A\u81EA\u52A8\u521B\u5EFA\u7D22\u5F15\u3002

  MyISAM\u5B58\u50A8\u5F15\u64CE\u7279\u70B9\uFF1A
    \u53EF\u88AB\u8F6C\u6362\u4E3A\u538B\u7F29\u3001\u53EA\u8BFB\u8868\u6765\u8282\u7701\u7A7A\u95F4\uFF0C\u8FD9\u662F\u8FD9\u79CD\u5B58\u50A8\u5F15\u64CE\u7684\u4F18\u52BF\uFF01\uFF01\uFF01\uFF01
  
  MyISAM\u4E0D\u652F\u6301\u4E8B\u52A1\u673A\u5236\uFF0C\u5B89\u5168\u6027\u4F4E\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="innodb-\u5B58\u50A8\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#innodb-\u5B58\u50A8\u5F15\u64CE" aria-hidden="true">#</a> InnoDB \u5B58\u50A8\u5F15\u64CE</h3><div class="language-mysq ext-mysq line-numbers-mode"><pre class="language-mysq"><code>\u8FD9\u662Fmysql\u9ED8\u8BA4\u7684\u5B58\u50A8\u5F15\u64CE\uFF0C\u540C\u65F6\u4E5F\u662F\u4E00\u4E2A\u91CD\u91CF\u7EA7\u7684\u5B58\u50A8\u5F15\u64CE\u3002
InnoDB\u652F\u6301\u4E8B\u52A1\uFF0C\u652F\u6301\u6570\u636E\u5E93\u5D29\u6E83\u540E\u81EA\u52A8\u6062\u590D\u673A\u5236\u3002
InnoDB\u5B58\u50A8\u5F15\u64CE\u6700\u4E3B\u8981\u7684\u7279\u70B9\u662F\uFF1A\u975E\u5E38\u5B89\u5168\u3002

\u5B83\u7BA1\u7406\u7684\u8868\u5177\u6709\u4E0B\u5217\u4E3B\u8981\u7279\u5F81\uFF1A
  \u2013 \u6BCF\u4E2A InnoDB \u8868\u5728\u6570\u636E\u5E93\u76EE\u5F55\u4E2D\u4EE5.frm \u683C\u5F0F\u6587\u4EF6\u8868\u793A
  \u2013 InnoDB \u8868\u7A7A\u95F4 tablespace \u88AB\u7528\u4E8E\u5B58\u50A8\u8868\u7684\u5185\u5BB9\uFF08\u8868\u7A7A\u95F4\u662F\u4E00\u4E2A\u903B\u8F91\u540D\u79F0\u3002\u8868\u7A7A\u95F4\u5B58\u50A8\u6570\u636E+\u7D22\u5F15\u3002\uFF09

  \u2013 \u63D0\u4F9B\u4E00\u7EC4\u7528\u6765\u8BB0\u5F55\u4E8B\u52A1\u6027\u6D3B\u52A8\u7684\u65E5\u5FD7\u6587\u4EF6
  \u2013 \u7528 COMMIT(\u63D0\u4EA4)\u3001SAVEPOINT \u53CAROLLBACK(\u56DE\u6EDA)\u652F\u6301\u4E8B\u52A1\u5904\u7406
  \u2013 \u63D0\u4F9B\u5168 ACID \u517C\u5BB9
  \u2013 \u5728 MySQL \u670D\u52A1\u5668\u5D29\u6E83\u540E\u63D0\u4F9B\u81EA\u52A8\u6062\u590D
  \u2013 \u591A\u7248\u672C\uFF08MVCC\uFF09\u548C\u884C\u7EA7\u9501\u5B9A
  \u2013 \u652F\u6301\u5916\u952E\u53CA\u5F15\u7528\u7684\u5B8C\u6574\u6027\uFF0C\u5305\u62EC\u7EA7\u8054\u5220\u9664\u548C\u66F4\u65B0

InnoDB\u6700\u5927\u7684\u7279\u70B9\u5C31\u662F\u652F\u6301\u4E8B\u52A1\uFF1A
  \u4EE5\u4FDD\u8BC1\u6570\u636E\u7684\u5B89\u5168\u3002\u6548\u7387\u4E0D\u662F\u5F88\u9AD8\uFF0C\u5E76\u4E14\u4E5F\u4E0D\u80FD\u538B\u7F29\uFF0C\u4E0D\u80FD\u8F6C\u6362\u4E3A\u53EA\u8BFB\uFF0C
  \u4E0D\u80FD\u5F88\u597D\u7684\u8282\u7701\u5B58\u50A8\u7A7A\u95F4\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="memory-\u5B58\u50A8\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#memory-\u5B58\u50A8\u5F15\u64CE" aria-hidden="true">#</a> MEMORY \u5B58\u50A8\u5F15\u64CE</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u4F7F\u7528 MEMORY \u5B58\u50A8\u5F15\u64CE\u7684\u8868\uFF0C\u5176\u6570\u636E\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\uFF0C\u4E14\u884C\u7684\u957F\u5EA6\u56FA\u5B9A\uFF0C
\u8FD9\u4E24\u4E2A\u7279\u70B9\u4F7F\u5F97 MEMORY \u5B58\u50A8\u5F15\u64CE\u975E\u5E38\u5FEB\u3002

MEMORY \u5B58\u50A8\u5F15\u64CE\u7BA1\u7406\u7684\u8868\u5177\u6709\u4E0B\u5217\u7279\u5F81\uFF1A
  \u2013 \u5728\u6570\u636E\u5E93\u76EE\u5F55\u5185\uFF0C\u6BCF\u4E2A\u8868\u5747\u4EE5.frm \u683C\u5F0F\u7684\u6587\u4EF6\u8868\u793A\u3002
  \u2013 \u8868\u6570\u636E\u53CA\u7D22\u5F15\u88AB\u5B58\u50A8\u5728\u5185\u5B58\u4E2D\u3002\uFF08\u76EE\u7684\u5C31\u662F\u5FEB\uFF0C\u67E5\u8BE2\u5FEB\uFF01\uFF09
  \u2013 \u8868\u7EA7\u9501\u673A\u5236\u3002
  \u2013 \u4E0D\u80FD\u5305\u542B TEXT \u6216 BLOB \u5B57\u6BB5\u3002

MEMORY \u5B58\u50A8\u5F15\u64CE\u4EE5\u524D\u88AB\u79F0\u4E3A HEAP \u5F15\u64CE\u3002

MEMORY \u5F15\u64CE\u4F18\u70B9\uFF1A\u67E5\u8BE2\u6548\u7387\u662F\u6700\u9AD8\u7684\u3002\u4E0D\u9700\u8981\u548C\u786C\u76D8\u4EA4\u4E92\u3002
MEMORY \u5F15\u64CE\u7F3A\u70B9\uFF1A\u4E0D\u5B89\u5168\uFF0C\u5173\u673A\u4E4B\u540E\u6570\u636E\u6D88\u5931\u3002\u56E0\u4E3A\u6570\u636E\u548C\u7D22\u5F15\u90FD\u662F\u5728\u5185\u5B58\u5F53\u4E2D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1" aria-hidden="true">#</a> \u4E8B\u52A1</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u4EC0\u4E48\u662F\u4E8B\u52A1\uFF1F

\u4E00\u4E2A\u4E8B\u52A1\u5176\u5B9E\u5C31\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u4E1A\u52A1\u903B\u8F91\u3002\u662F\u4E00\u4E2A\u6700\u5C0F\u7684\u5DE5\u4F5C\u5355\u5143\u3002\u4E0D\u53EF\u518D\u5206\u3002

\u4EC0\u4E48\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u4E1A\u52A1\u903B\u8F91\uFF1F
  \u5047\u8BBE\u8F6C\u8D26\uFF0C\u4ECEA\u8D26\u6237\u5411B\u8D26\u6237\u4E2D\u8F6C\u8D2610000.
  \u5C06A\u8D26\u6237\u7684\u94B1\u51CF\u53BB10000\uFF08update\u8BED\u53E5\uFF09
  \u5C06B\u8D26\u6237\u7684\u94B1\u52A0\u4E0A10000\uFF08update\u8BED\u53E5\uFF09
  \u8FD9\u5C31\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u4E1A\u52A1\u903B\u8F91\u3002

  \u4EE5\u4E0A\u7684\u64CD\u4F5C\u662F\u4E00\u4E2A\u6700\u5C0F\u7684\u5DE5\u4F5C\u5355\u5143\uFF0C\u8981\u4E48\u540C\u65F6\u6210\u529F\uFF0C\u8981\u4E48\u540C\u65F6\u5931\u8D25\uFF0C\u4E0D\u53EF\u518D\u5206\u3002
  \u8FD9\u4E24\u4E2Aupdate\u8BED\u53E5\u8981\u6C42\u5FC5\u987B\u540C\u65F6\u6210\u529F\u6216\u8005\u540C\u65F6\u5931\u8D25\uFF0C\u8FD9\u6837\u624D\u80FD\u4FDD\u8BC1\u94B1\u662F\u6B63\u786E\u7684\u3002

\u53EA\u6709DML\u8BED\u53E5\u624D\u4F1A\u6709\u4E8B\u52A1\u8FD9\u4E00\u8BF4\uFF0C\u5176\u5B83\u8BED\u53E5\u548C\u4E8B\u52A1\u65E0\u5173\uFF01\uFF01\uFF01
insert
delete
update
\u53EA\u6709\u4EE5\u4E0A\u7684\u4E09\u4E2A\u8BED\u53E5\u548C\u4E8B\u52A1\u6709\u5173\u7CFB\uFF0C\u5176\u5B83\u90FD\u6CA1\u6709\u5173\u7CFB\u3002

\u56E0\u4E3A \u53EA\u6709\u4EE5\u4E0A\u7684\u4E09\u4E2A\u8BED\u53E5\u662F\u6570\u636E\u5E93\u8868\u4E2D\u6570\u636E\u8FDB\u884C\u589E\u3001\u5220\u3001\u6539\u7684\u3002\u53EA\u8981\u4F60\u7684\u64CD\u4F5C\u4E00\u65E6\u6D89\u53CA\u5230\u6570\u636E\u7684\u589E\u3001\u5220\u3001\u6539\uFF0C\u90A3\u4E48\u5C31\u4E00\u5B9A\u8981\u8003\u8651\u5B89\u5168\u95EE\u9898\u3002

InnoDB\u5B58\u50A8\u5F15\u64CE\uFF1A\u63D0\u4F9B\u4E00\u7EC4\u7528\u6765\u8BB0\u5F55\u4E8B\u52A1\u6027\u6D3B\u52A8\u7684\u65E5\u5FD7\u6587\u4EF6

\u4E8B\u52A1\u5F00\u542F\u4E86\uFF1A
insert
insert
insert
delete
update
update
update
\u4E8B\u52A1\u7ED3\u675F\u4E86\uFF01

\u5728\u4E8B\u52A1\u7684\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u6BCF\u4E00\u6761DML\u7684\u64CD\u4F5C\u90FD\u4F1A\u8BB0\u5F55\u5230\u201C\u4E8B\u52A1\u6027\u6D3B\u52A8\u7684\u65E5\u5FD7\u6587\u4EF6\u201D\u4E2D\u3002
\u5728\u4E8B\u52A1\u7684\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63D0\u4EA4\u4E8B\u52A1\uFF0C\u4E5F\u53EF\u4EE5\u56DE\u6EDA\u4E8B\u52A1\u3002

\u63D0\u4EA4\u4E8B\u52A1\uFF1F
  \u6E05\u7A7A\u4E8B\u52A1\u6027\u6D3B\u52A8\u7684\u65E5\u5FD7\u6587\u4EF6\uFF0C\u5C06\u6570\u636E\u5168\u90E8\u5F7B\u5E95\u6301\u4E45\u5316\u5230\u6570\u636E\u5E93\u8868\u4E2D\u3002
  \u63D0\u4EA4\u4E8B\u52A1\u6807\u5FD7\u7740\uFF0C\u4E8B\u52A1\u7684\u7ED3\u675F\u3002\u5E76\u4E14\u662F\u4E00\u79CD\u5168\u90E8\u6210\u529F\u7684\u7ED3\u675F\u3002

\u56DE\u6EDA\u4E8B\u52A1\uFF1F
  \u5C06\u4E4B\u524D\u6240\u6709\u7684DML\u64CD\u4F5C\u5168\u90E8\u64A4\u9500\uFF0C\u5E76\u4E14\u6E05\u7A7A\u4E8B\u52A1\u6027\u6D3B\u52A8\u7684\u65E5\u5FD7\u6587\u4EF6
  \u56DE\u6EDA\u4E8B\u52A1\u6807\u5FD7\u7740\uFF0C\u4E8B\u52A1\u7684\u7ED3\u675F\u3002\u5E76\u4E14\u662F\u4E00\u79CD\u5168\u90E8\u5931\u8D25\u7684\u7ED3\u675F\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u63D0\u4EA4\u4E8B\u52A1\u3001\u56DE\u6EDA\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4\u4E8B\u52A1\u3001\u56DE\u6EDA\u4E8B\u52A1" aria-hidden="true">#</a> \u63D0\u4EA4\u4E8B\u52A1\u3001\u56DE\u6EDA\u4E8B\u52A1</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u63D0\u4EA4\u4E8B\u52A1\uFF1Acommit; \u8BED\u53E5
\u56DE\u6EDA\u4E8B\u52A1\uFF1Arollback; \u8BED\u53E5\uFF08\u56DE\u6EDA\u6C38\u8FDC\u90FD\u662F\u53EA\u80FD\u56DE\u6EDA\u5230\u4E0A\u4E00\u6B21\u7684\u63D0\u4EA4\u70B9\uFF01\uFF09

\u4E8B\u52A1\u5BF9\u5E94\u7684\u82F1\u8BED\u5355\u8BCD\u662F\uFF1Atransaction

\u6D4B\u8BD5\u4E00\u4E0B\uFF0C\u5728mysql\u5F53\u4E2D\u9ED8\u8BA4\u7684\u4E8B\u52A1\u884C\u4E3A\u662F\u600E\u6837\u7684\uFF1F
  mysql\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F\u652F\u6301\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1\u7684\u3002\uFF08\u81EA\u52A8\u63D0\u4EA4\uFF09
  \u4EC0\u4E48\u662F\u81EA\u52A8\u63D0\u4EA4\uFF1F
    \u6BCF\u6267\u884C\u4E00\u6761DML\u8BED\u53E5\uFF0C\u5219\u63D0\u4EA4\u4E00\u6B21\uFF01\u8FD9\u79CD\u81EA\u52A8\u63D0\u4EA4\u5B9E\u9645\u4E0A\u662F\u4E0D\u7B26\u5408\u6211\u4EEC\u7684\u5F00\u53D1\u4E60\u60EF\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u4E1A\u52A1\u901A\u5E38\u662F\u9700\u8981\u591A\u6761DML\u8BED\u53E5\u5171\u540C\u6267\u884C\u624D\u80FD\u5B8C\u6210\u7684\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u6570\u636E\u7684\u5B89\u5168\uFF0C\u5FC5\u987B\u8981\u6C42\u540C\u65F6\u6210\u529F\u4E4B\u540E\u518D\u63D0\u4EA4\uFF0C\u6240\u4EE5\u4E0D\u80FD\u6267\u884C\u4E00\u6761\u5C31\u63D0\u4EA4\u4E00\u6761\u3002

\u600E\u4E48\u5C06mysql\u7684\u81EA\u52A8\u63D0\u4EA4\u673A\u5236\u5173\u95ED\u6389\u5462\uFF1F
  \u5148\u6267\u884C\u8FD9\u4E2A\u547D\u4EE4\uFF1Astart transaction;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4EE3\u7801\u6F14\u793A</strong></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u6F14\u793A\u4E8B\u52A1\uFF1A
  ---------------------------------\u56DE\u6EDA\u4E8B\u52A1----------------------------------------
  mysql&gt; use bjpowernode;
  Database changed
  mysql&gt; select * from dept_bak;
  Empty set (0.00 sec)

  mysql&gt; start transaction;
  Query OK, 0 rows affected (0.00 sec)

  mysql&gt; insert into dept_bak values(10,&#39;abc&#39;, &#39;tj&#39;);
  Query OK, 1 row affected (0.00 sec)

  mysql&gt; insert into dept_bak values(10,&#39;abc&#39;, &#39;tj&#39;);
  Query OK, 1 row affected (0.00 sec)

  mysql&gt; select * from dept_bak;
  +--------+-------+------+
  | DEPTNO | DNAME | LOC  |
  +--------+-------+------+
  |     10 | abc   | tj   |
  |     10 | abc   | tj   |
  +--------+-------+------+
  2 rows in set (0.00 sec)

  mysql&gt; rollback;
  Query OK, 0 rows affected (0.00 sec)

  mysql&gt; select * from dept_bak;
  Empty set (0.00 sec)


  ---------------------------------\u63D0\u4EA4\u4E8B\u52A1----------------------------------------
  mysql&gt; use bjpowernode;
  Database changed
  mysql&gt; select * from dept_bak;
  +--------+-------+------+
  | DEPTNO | DNAME | LOC  |
  +--------+-------+------+
  |     10 | abc   | bj   |
  +--------+-------+------+
  1 row in set (0.00 sec)

  mysql&gt; start transaction;
  Query OK, 0 rows affected (0.00 sec)

  mysql&gt; insert into dept_bak values(20,&#39;abc&#39;\uFF09
  Query OK, 1 row affected (0.00 sec)

  mysql&gt; insert into dept_bak values(20,&#39;abc&#39;)
  Query OK, 1 row affected (0.00 sec)

  mysql&gt; insert into dept_bak values(20,&#39;abc&#39;)
  Query OK, 1 row affected (0.00 sec)

  mysql&gt; commit;
  Query OK, 0 rows affected (0.01 sec)

  mysql&gt; select * from dept_bak;
  +--------+-------+------+
  | DEPTNO | DNAME | LOC  |
  +--------+-------+------+
  |     10 | abc   | bj   |
  |     20 | abc   | tj   |
  |     20 | abc   | tj   |
  |     20 | abc   | tj   |
  +--------+-------+------+
  4 rows in set (0.00 sec)

  mysql&gt; rollback;
  Query OK, 0 rows affected (0.00 sec)

  mysql&gt; select * from dept_bak;
  +--------+-------+------+
  | DEPTNO | DNAME | LOC  |
  +--------+-------+------+
  |     10 | abc   | bj   |
  |     20 | abc   | tj   |
  |     20 | abc   | tj   |
  |     20 | abc   | tj   |
  +--------+-------+------+
  4 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E8B\u52A1\u56DB\u4E2A\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1\u56DB\u4E2A\u7279\u6027" aria-hidden="true">#</a> \u4E8B\u52A1\u56DB\u4E2A\u7279\u6027</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>A\uFF1A\u539F\u5B50\u6027
  \u8BF4\u660E\u4E8B\u52A1\u662F\u6700\u5C0F\u7684\u5DE5\u4F5C\u5355\u5143\u3002\u4E0D\u53EF\u518D\u5206\u3002

C\uFF1A\u4E00\u81F4\u6027
  \u6240\u6709\u4E8B\u52A1\u8981\u6C42\uFF0C\u5728\u540C\u4E00\u4E2A\u4E8B\u52A1\u5F53\u4E2D\uFF0C\u6240\u6709\u64CD\u4F5C\u5FC5\u987B\u540C\u65F6\u6210\u529F\uFF0C\u6216\u8005\u540C\u65F6\u5931\u8D25\uFF0C\u4EE5\u4FDD\u8BC1\u6570\u636E\u7684\u4E00\u81F4\u6027\u3002

I\uFF1A\u9694\u79BB\u6027
  A\u4E8B\u52A1\u548CB\u4E8B\u52A1\u4E4B\u95F4\u5177\u6709\u4E00\u5B9A\u7684\u9694\u79BB\u3002
  \u6559\u5BA4A\u548C\u6559\u5BA4B\u4E4B\u95F4\u6709\u4E00\u9053\u5899\uFF0C\u8FD9\u9053\u5899\u5C31\u662F\u9694\u79BB\u6027\u3002

D\uFF1A\u6301\u4E45\u6027
  \u4E8B\u52A1\u6700\u7EC8\u7ED3\u675F\u7684\u4E00\u4E2A\u4FDD\u969C\u3002\u4E8B\u52A1\u63D0\u4EA4\uFF0C\u5C31\u76F8\u5F53\u4E8E\u5C06\u6CA1\u6709\u4FDD\u5B58\u5230\u786C\u76D8\u4E0A\u7684\u6570\u636E\u4FDD\u5B58\u5230\u786C\u76D8\u4E0A\uFF01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E8B\u52A1\u7684\u9694\u79BB\u6027" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1\u7684\u9694\u79BB\u6027" aria-hidden="true">#</a> \u4E8B\u52A1\u7684\u9694\u79BB\u6027</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>A\u6559\u5BA4\u548CB\u6559\u5BA4\u4E2D\u95F4\u6709\u4E00\u9053\u5899\uFF0C\u8FD9\u9053\u5899\u53EF\u4EE5\u5F88\u539A\uFF0C\u4E5F\u53EF\u4EE5\u5F88\u8584\u3002\u8FD9\u5C31\u662F\u4E8B\u52A1\u7684\u9694\u79BB\u7EA7\u522B\u3002
\u8FD9\u9053\u5899\u8D8A\u539A\uFF0C\u8868\u793A\u9694\u79BB\u7EA7\u522B\u5C31\u8D8A\u9AD8\u3002

\u4E8B\u52A1\u548C\u4E8B\u52A1\u4E4B\u95F4\u7684\u9694\u79BB\u7EA7\u522B\u6709\u54EA\u4E9B\u5462\uFF1F4\u4E2A\u7EA7\u522B

\u8BFB\u672A\u63D0\u4EA4\uFF1Aread uncommitted\uFF08\u6700\u4F4E\u7684\u9694\u79BB\u7EA7\u522B\uFF09\u300A\u6CA1\u6709\u63D0\u4EA4\u5C31\u8BFB\u5230\u4E86\u300B
  \u4EC0\u4E48\u662F\u8BFB\u672A\u63D0\u4EA4\uFF1F
    \u4E8B\u52A1A\u53EF\u4EE5\u8BFB\u53D6\u5230\u4E8B\u52A1B\u672A\u63D0\u4EA4\u7684\u6570\u636E\u3002
  \u8FD9\u79CD\u9694\u79BB\u7EA7\u522B\u5B58\u5728\u7684\u95EE\u9898\u5C31\u662F\uFF1A
    \u810F\u8BFB\u73B0\u8C61\uFF01(Dirty Read)
    \u6211\u4EEC\u79F0\u8BFB\u5230\u4E86\u810F\u6570\u636E\u3002
  \u8FD9\u79CD\u9694\u79BB\u7EA7\u522B\u4E00\u822C\u90FD\u662F\u7406\u8BBA\u4E0A\u7684\uFF0C\u5927\u591A\u6570\u7684\u6570\u636E\u5E93\u9694\u79BB\u7EA7\u522B\u90FD\u662F\u4E8C\u6863\u8D77\u6B65\uFF01

\u8BFB\u5DF2\u63D0\u4EA4\uFF1Aread committed\u300A\u63D0\u4EA4\u4E4B\u540E\u624D\u80FD\u8BFB\u5230\u300B
  \u4EC0\u4E48\u662F\u8BFB\u5DF2\u63D0\u4EA4\uFF1F
    \u4E8B\u52A1A\u53EA\u80FD\u8BFB\u53D6\u5230\u4E8B\u52A1B\u63D0\u4EA4\u4E4B\u540E\u7684\u6570\u636E\u3002
  \u8FD9\u79CD\u9694\u79BB\u7EA7\u522B\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F
    \u89E3\u51B3\u4E86\u810F\u8BFB\u7684\u73B0\u8C61\u3002
  \u8FD9\u79CD\u9694\u79BB\u7EA7\u522B\u5B58\u5728\u4EC0\u4E48\u95EE\u9898\uFF1F
    \u4E0D\u53EF\u91CD\u590D\u8BFB\u53D6\u6570\u636E\u3002
    \u4EC0\u4E48\u662F\u4E0D\u53EF\u91CD\u590D\u8BFB\u53D6\u6570\u636E\u5462\uFF1F
      \u5728\u4E8B\u52A1\u5F00\u542F\u4E4B\u540E\uFF0C\u7B2C\u4E00\u6B21\u8BFB\u5230\u7684\u6570\u636E\u662F3\u6761\uFF0C\u5F53\u524D\u4E8B\u52A1\u8FD8\u6CA1\u6709
      \u7ED3\u675F\uFF0C\u53EF\u80FD\u7B2C\u4E8C\u6B21\u518D\u8BFB\u53D6\u7684\u65F6\u5019\uFF0C\u8BFB\u5230\u7684\u6570\u636E\u662F4\u6761\uFF0C3\u4E0D\u7B49\u4E8E4
      \u79F0\u4E3A\u4E0D\u53EF\u91CD\u590D\u8BFB\u53D6\u3002

  \u8FD9\u79CD\u9694\u79BB\u7EA7\u522B\u662F\u6BD4\u8F83\u771F\u5B9E\u7684\u6570\u636E\uFF0C\u6BCF\u4E00\u6B21\u8BFB\u5230\u7684\u6570\u636E\u662F\u7EDD\u5BF9\u7684\u771F\u5B9E\u3002
  oracle\u6570\u636E\u5E93\u9ED8\u8BA4\u7684\u9694\u79BB\u7EA7\u522B\u662F\uFF1Aread committed

\u53EF\u91CD\u590D\u8BFB\uFF1Arepeatable read\u300A\u63D0\u4EA4\u4E4B\u540E\u4E5F\u8BFB\u4E0D\u5230\uFF0C\u6C38\u8FDC\u8BFB\u53D6\u7684\u90FD\u662F\u521A\u5F00\u542F\u4E8B\u52A1\u65F6\u7684\u6570\u636E\u300B
  \u4EC0\u4E48\u662F\u53EF\u91CD\u590D\u8BFB\u53D6\uFF1F
    \u4E8B\u52A1A\u5F00\u542F\u4E4B\u540E\uFF0C\u4E0D\u7BA1\u662F\u591A\u4E45\uFF0C\u6BCF\u4E00\u6B21\u5728\u4E8B\u52A1A\u4E2D\u8BFB\u53D6\u5230\u7684\u6570\u636E
    \u90FD\u662F\u4E00\u81F4\u7684\u3002\u5373\u4F7F\u4E8B\u52A1B\u5C06\u6570\u636E\u5DF2\u7ECF\u4FEE\u6539\uFF0C\u5E76\u4E14\u63D0\u4EA4\u4E86\uFF0C\u4E8B\u52A1A
    \u8BFB\u53D6\u5230\u7684\u6570\u636E\u8FD8\u662F\u6CA1\u6709\u53D1\u751F\u6539\u53D8\uFF0C\u8FD9\u5C31\u662F\u53EF\u91CD\u590D\u8BFB\u3002
  \u53EF\u91CD\u590D\u8BFB\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898\uFF1F
    \u89E3\u51B3\u4E86\u4E0D\u53EF\u91CD\u590D\u8BFB\u53D6\u6570\u636E\u3002
  \u53EF\u91CD\u590D\u8BFB\u5B58\u5728\u7684\u95EE\u9898\u662F\u4EC0\u4E48\uFF1F
    \u53EF\u4EE5\u4F1A\u51FA\u73B0\u5E7B\u5F71\u8BFB\u3002
    \u6BCF\u4E00\u6B21\u8BFB\u53D6\u5230\u7684\u6570\u636E\u90FD\u662F\u5E7B\u8C61\u3002\u4E0D\u591F\u771F\u5B9E\uFF01
  
  \u65E9\u66689\u70B9\u5F00\u59CB\u5F00\u542F\u4E86\u4E8B\u52A1\uFF0C\u53EA\u8981\u4E8B\u52A1\u4E0D\u7ED3\u675F\uFF0C\u5230\u665A\u4E0A9\u70B9\uFF0C\u8BFB\u5230\u7684\u6570\u636E\u8FD8\u662F\u90A3\u6837\uFF01
  \u8BFB\u5230\u7684\u662F\u5047\u8C61\u3002\u4E0D\u591F\u7EDD\u5BF9\u7684\u771F\u5B9E\u3002

  mysql\u4E2D\u9ED8\u8BA4\u7684\u4E8B\u52A1\u9694\u79BB\u7EA7\u522B\u5C31\u662F\u8FD9\u4E2A\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01

\u5E8F\u5217\u5316/\u4E32\u884C\u5316\uFF1Aserializable\uFF08\u6700\u9AD8\u7684\u9694\u79BB\u7EA7\u522B\uFF09
  \u8FD9\u662F\u6700\u9AD8\u9694\u79BB\u7EA7\u522B\uFF0C\u6548\u7387\u6700\u4F4E\u3002\u89E3\u51B3\u4E86\u6240\u6709\u7684\u95EE\u9898\u3002
  \u8FD9\u79CD\u9694\u79BB\u7EA7\u522B\u8868\u793A\u4E8B\u52A1\u6392\u961F\uFF0C\u4E0D\u80FD\u5E76\u53D1\uFF01
  synchronized\uFF0C\u7EBF\u7A0B\u540C\u6B65\uFF08\u4E8B\u52A1\u540C\u6B65\uFF09
  \u6BCF\u4E00\u6B21\u8BFB\u53D6\u5230\u7684\u6570\u636E\u90FD\u662F\u6700\u771F\u5B9E\u7684\uFF0C\u5E76\u4E14\u6548\u7387\u662F\u6700\u4F4E\u7684\u3002

\u67E5\u770B\u9694\u79BB\u7EA7\u522B\uFF1ASELECT @@tx_isolation
+-----------------+
| @@tx_isolation  |
+-----------------+
| REPEATABLE-READ |
+-----------------+
mysql\u9ED8\u8BA4\u7684\u9694\u79BB\u7EA7\u522B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7D22\u5F15-index" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15-index" aria-hidden="true">#</a> \u7D22\u5F15\uFF08index\uFF09</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u4EC0\u4E48\u662F\u7D22\u5F15\uFF1F
\u7D22\u5F15\u662F\u5728\u6570\u636E\u5E93\u8868\u7684\u5B57\u6BB5\u4E0A\u6DFB\u52A0\u7684\uFF0C\u662F\u4E3A\u4E86\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\u5B58\u5728\u7684\u4E00\u79CD\u673A\u5236\u3002
\u4E00\u5F20\u8868\u7684\u4E00\u4E2A\u5B57\u6BB5\u53EF\u4EE5\u6DFB\u52A0\u4E00\u4E2A\u7D22\u5F15\uFF0C\u5F53\u7136\uFF0C\u591A\u4E2A\u5B57\u6BB5\u8054\u5408\u8D77\u6765\u4E5F\u53EF\u4EE5\u6DFB\u52A0\u7D22\u5F15\u3002
\u7D22\u5F15\u76F8\u5F53\u4E8E\u4E00\u672C\u4E66\u7684\u76EE\u5F55\uFF0C\u662F\u4E3A\u4E86\u7F29\u5C0F\u626B\u63CF\u8303\u56F4\u800C\u5B58\u5728\u7684\u4E00\u79CD\u673A\u5236\u3002

\u5BF9\u4E8E\u4E00\u672C\u5B57\u5178\u6765\u8BF4\uFF0C\u67E5\u627E\u67D0\u4E2A\u6C49\u5B57\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A
  \u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A\u4E00\u9875\u4E00\u9875\u6328\u7740\u627E\uFF0C\u76F4\u5230\u627E\u5230\u4E3A\u6B62\uFF0C\u8FD9\u79CD\u67E5\u627E\u65B9\u5F0F\u5C5E\u4E8E\u5168\u5B57\u5178\u626B\u63CF\u3002
  \u6548\u7387\u6BD4\u8F83\u4F4E\u3002
  \u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A\u5148\u901A\u8FC7\u76EE\u5F55\uFF08\u7D22\u5F15\uFF09\u53BB\u5B9A\u4F4D\u4E00\u4E2A\u5927\u6982\u7684\u4F4D\u7F6E\uFF0C\u7136\u540E\u76F4\u63A5\u5B9A\u4F4D\u5230\u8FD9\u4E2A
  \u4F4D\u7F6E\uFF0C\u505A\u5C40\u57DF\u6027\u626B\u63CF\uFF0C\u7F29\u5C0F\u626B\u63CF\u7684\u8303\u56F4\uFF0C\u5FEB\u901F\u7684\u67E5\u627E\u3002\u8FD9\u79CD\u67E5\u627E\u65B9\u5F0F\u5C5E\u4E8E\u901A\u8FC7
  \u7D22\u5F15\u68C0\u7D22\uFF0C\u6548\u7387\u8F83\u9AD8\u3002
  
select * from t_user where name = &#39;jack&#39;;

\u4EE5\u4E0A\u7684\u8FD9\u6761SQL\u8BED\u53E5\u4F1A\u53BBname\u5B57\u6BB5\u4E0A\u626B\u63CF\uFF0C\u4E3A\u4EC0\u4E48\uFF1F
  \u56E0\u4E3A\u67E5\u8BE2\u6761\u4EF6\u662F\uFF1Aname=&#39;jack&#39;

\u5982\u679Cname\u5B57\u6BB5\u4E0A\u6CA1\u6709\u6DFB\u52A0\u7D22\u5F15\uFF08\u76EE\u5F55\uFF09\uFF0C\u6216\u8005\u8BF4\u6CA1\u6709\u7ED9name\u5B57\u6BB5\u521B\u5EFA\u7D22\u5F15\uFF0CMySQL\u4F1A\u8FDB\u884C\u5168\u626B\u63CF\uFF0C\u4F1A\u5C06name\u5B57\u6BB5\u4E0A\u7684\u6BCF\u4E00\u4E2A\u503C\u90FD\u6BD4\u5BF9\u4E00\u904D\u3002\u6548\u7387\u6BD4\u8F83\u4F4E\u3002

MySQL\u5728\u67E5\u8BE2\u65B9\u9762\u4E3B\u8981\u5C31\u662F\u4E24\u79CD\u65B9\u5F0F\uFF1A
  \u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A\u5168\u8868\u626B\u63CF
  \u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A\u6839\u636E\u7D22\u5F15\u68C0\u7D22\u3002

\u6CE8\u610F\uFF1A
  \u5728\u5B9E\u9645\u4E2D\uFF0C\u6C49\u8BED\u5B57\u5178\u524D\u9762\u7684\u76EE\u5F55\u662F\u6392\u5E8F\u7684\uFF0C\u6309\u7167a b c d e f....\u6392\u5E8F\uFF0C
  \u4E3A\u4EC0\u4E48\u6392\u5E8F\u5462\uFF1F\u56E0\u4E3A\u53EA\u6709\u6392\u5E8F\u4E86\u624D\u4F1A\u6709\u533A\u95F4\u67E5\u627E\u8FD9\u4E00\u8BF4\uFF01\uFF08\u7F29\u5C0F\u626B\u63CF\u8303\u56F4
  \u5176\u5B9E\u5C31\u662F\u626B\u63CF\u67D0\u4E2A\u533A\u95F4\u7F62\u4E86\uFF01\uFF09

\u5728 mysql \u6570\u636E\u5E93\u5F53\u4E2D\u7D22\u5F15\u4E5F\u662F\u9700\u8981\u6392\u5E8F\u7684\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u6240\u4EE5\u7684\u6392\u5E8F\u548CTreeSet\u6570\u636E\u7ED3\u6784\u76F8\u540C\u3002TreeSet\uFF08TreeMap\uFF09\u5E95\u5C42\u662F\u4E00\u4E2A\u81EA\u5E73\u8861\u7684\u4E8C\u53C9\u6811\uFF01\u5728 mysql \u5F53\u4E2D\u7D22\u5F15\u662F\u4E00\u4E2AB-Tree\u6570\u636E\u7ED3\u6784\u3002

  \u9075\u5FAA\u5DE6\u5C0F\u53F3\u5927\u539F\u5219\u5B58\u653E\u3002\u91C7\u7528\u4E2D\u5E8F\u904D\u5386\u65B9\u5F0F\u904D\u5386\u53D6\u6570\u636E\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> \u5B9E\u73B0\u539F\u7406</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u5047\u8BBE\u6709\u4E00\u5F20\u7528\u6237\u8868\uFF1At_user

id(PK)					name						\u6BCF\u4E00\u884C\u8BB0\u5F55\u5728\u786C\u76D8\u4E0A\u90FD\u6709\u7269\u7406\u5B58\u50A8\u7F16\u53F7
----------------------------------------------------------------------------------
100						zhangsan					0x1111
120						lisi						0x2222
99						wangwu						0x8888
88						zhaoliu						0x9999
101						jack						0x6666
55						lucy						0x5555
130						tom							0x7777

\u63D0\u91921\uFF1A\u5728\u4EFB\u4F55\u6570\u636E\u5E93\u5F53\u4E2D\u4E3B\u952E\u4E0A\u90FD\u4F1A\u81EA\u52A8\u6DFB\u52A0\u7D22\u5F15\u5BF9\u8C61\uFF0Cid\u5B57\u6BB5\u4E0A\u81EA\u52A8\u6709\u7D22\u5F15\uFF0C\u56E0\u4E3Aid\u662FPK\u3002\u53E6\u5916\u5728mysql\u5F53\u4E2D\uFF0C\u4E00\u4E2A\u5B57\u6BB5\u4E0A\u5982\u679C\u6709unique\u7EA6\u675F\u7684\u8BDD\uFF0C\u4E5F\u4F1A\u81EA\u52A8\u521B\u5EFA\u7D22\u5F15\u5BF9\u8C61\u3002

\u63D0\u91922\uFF1A\u5728\u4EFB\u4F55\u6570\u636E\u5E93\u5F53\u4E2D\uFF0C\u4EFB\u4F55\u4E00\u5F20\u8868\u7684\u4EFB\u4F55\u4E00\u6761\u8BB0\u5F55\u5728\u786C\u76D8\u5B58\u50A8\u4E0A\u90FD\u6709\u4E00\u4E2A\u786C\u76D8\u7684\u7269\u7406\u5B58\u50A8\u7F16\u53F7\u3002

\u63D0\u91923\uFF1A\u5728mysql\u5F53\u4E2D\uFF0C\u7D22\u5F15\u662F\u4E00\u4E2A\u5355\u72EC\u7684\u5BF9\u8C61\uFF0C\u4E0D\u540C\u7684\u5B58\u50A8\u5F15\u64CE\u4EE5\u4E0D\u540C\u7684\u5F62\u5F0F\u5B58\u5728\uFF0C\u5728MyISAM\u5B58\u50A8\u5F15\u64CE\u4E2D\uFF0C\u7D22\u5F15\u5B58\u50A8\u5728\u4E00\u4E2A.MYI\u6587\u4EF6\u4E2D\u3002\u5728InnoDB\u5B58\u50A8\u5F15\u64CE\u4E2D\u7D22\u5F15\u5B58\u50A8\u5728\u4E00\u4E2A\u903B\u8F91\u540D\u79F0\u53EB\u505Atablespace\u7684\u5F53\u4E2D\u3002\u5728MEMORY\u5B58\u50A8\u5F15\u64CE\u5F53\u4E2D\u7D22\u5F15\u88AB\u5B58\u50A8\u5728\u5185\u5B58\u5F53\u4E2D\u3002\u4E0D\u7BA1\u7D22\u5F15\u5B58\u50A8\u5728\u54EA\u91CC\uFF0C\u7D22\u5F15\u5728mysql\u5F53\u4E2D\u90FD\u662F\u4E00\u4E2A\u6811\u7684\u5F62\u5F0F\u5B58\u5728\u3002\uFF08\u81EA\u5E73\u8861\u4E8C\u53C9\u6811\uFF1AB-Tree\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0\u7D22\u5F15\u7684\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u7D22\u5F15\u7684\u6761\u4EF6" aria-hidden="true">#</a> \u6DFB\u52A0\u7D22\u5F15\u7684\u6761\u4EF6</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u4EC0\u4E48\u6761\u4EF6\u4E0B\uFF0C\u6211\u4EEC\u4F1A\u8003\u8651\u7ED9\u5B57\u6BB5\u6DFB\u52A0\u7D22\u5F15\u5462\uFF1F
\u6761\u4EF61\uFF1A\u6570\u636E\u91CF\u5E9E\u5927\uFF08\u5230\u5E95\u6709\u591A\u4E48\u5E9E\u5927\u7B97\u5E9E\u5927\uFF0C\u8FD9\u4E2A\u9700\u8981\u6D4B\u8BD5\uFF0C\u56E0\u4E3A\u6BCF\u4E00\u4E2A\u786C\u4EF6\u73AF\u5883\u4E0D\u540C\uFF09
\u6761\u4EF62\uFF1A\u8BE5\u5B57\u6BB5\u7ECF\u5E38\u51FA\u73B0\u5728where\u7684\u540E\u9762\uFF0C\u4EE5\u6761\u4EF6\u7684\u5F62\u5F0F\u5B58\u5728\uFF0C\u4E5F\u5C31\u662F\u8BF4\u8FD9\u4E2A\u5B57\u6BB5\u603B\u662F\u88AB\u626B\u63CF\u3002
\u6761\u4EF63\uFF1A\u8BE5\u5B57\u6BB5\u5F88\u5C11\u7684DML(insert delete update)\u64CD\u4F5C\u3002\uFF08\u56E0\u4E3ADML\u4E4B\u540E\uFF0C\u7D22\u5F15\u9700\u8981\u91CD\u65B0\u6392\u5E8F\u3002\uFF09

\u5EFA\u8BAE\u4E0D\u8981\u968F\u610F\u6DFB\u52A0\u7D22\u5F15\uFF0C\u56E0\u4E3A\u7D22\u5F15\u4E5F\u662F\u9700\u8981\u7EF4\u62A4\u7684\uFF0C\u592A\u591A\u7684\u8BDD\u53CD\u800C\u4F1A\u964D\u4F4E\u7CFB\u7EDF\u7684\u6027\u80FD\u3002
\u5EFA\u8BAE\u901A\u8FC7\u4E3B\u952E\u67E5\u8BE2\uFF0C\u5EFA\u8BAE\u901A\u8FC7unique\u7EA6\u675F\u7684\u5B57\u6BB5\u8FDB\u884C\u67E5\u8BE2\uFF0C\u6548\u7387\u662F\u6BD4\u8F83\u9AD8\u7684\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7D22\u5F15\u7684\u521B\u5EFA\u548C\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15\u7684\u521B\u5EFA\u548C\u5220\u9664" aria-hidden="true">#</a> \u7D22\u5F15\u7684\u521B\u5EFA\u548C\u5220\u9664</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u521B\u5EFA\u7D22\u5F15\uFF1A
  mysql&gt; create index emp_ename_index on emp(ename);
  \u7ED9emp\u8868\u7684ename\u5B57\u6BB5\u6DFB\u52A0\u7D22\u5F15\uFF0C\u8D77\u540D\uFF1Aemp_ename_index

\u5220\u9664\u7D22\u5F15\uFF1A
  mysql&gt; drop index emp_ename_index on emp;
  \u5C06emp\u8868\u4E0A\u7684emp_ename_index\u7D22\u5F15\u5BF9\u8C61\u5220\u9664\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u662F\u5426\u4F7F\u7528\u7D22\u5F15\u8FDB\u884C\u68C0\u7D22" tabindex="-1"><a class="header-anchor" href="#\u662F\u5426\u4F7F\u7528\u7D22\u5F15\u8FDB\u884C\u68C0\u7D22" aria-hidden="true">#</a> \u662F\u5426\u4F7F\u7528\u7D22\u5F15\u8FDB\u884C\u68C0\u7D22</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u5728mysql\u5F53\u4E2D\uFF0C\u600E\u4E48\u67E5\u770B\u4E00\u4E2ASQL\u8BED\u53E5\u662F\u5426\u4F7F\u7528\u4E86\u7D22\u5F15\u8FDB\u884C\u68C0\u7D22\uFF1F

mysql&gt; explain select * from emp where ename = &#39;KING&#39;;
+----+-------------+-------+------+---------------+------+---------+------+------+-------------+
| id | select_type | table | type | possible_keys | key  | key_len | ref  | rows | Extra       |
+----+-------------+-------+------+---------------+------+---------+------+------+-------------+
|  1 | SIMPLE      | emp   | ALL  | NULL          | NULL | NULL    | NULL |   14 | Using where |
+----+-------------+-------+------+---------------+------+---------+------+------+-------------+
\u626B\u63CF14\u6761\u8BB0\u5F55\uFF1A\u8BF4\u660E\u6CA1\u6709\u4F7F\u7528\u7D22\u5F15\u3002type=ALL

mysql&gt; create index emp_ename_index on emp(ename);

mysql&gt; explain select * from emp where ename = &#39;KING&#39;;
+----+-------------+-------+------+-----------------+-----------------+---------+-------+------+-------------+
| id | select_type | table | type | possible_keys   | key             | key_len | ref   | rows | Extra       |
+----+-------------+-------+------+-----------------+-----------------+---------+-------+------+-------------+
|  1 | SIMPLE      | emp   | ref  | emp_ename_index | emp_ename_index | 33      | const |    1 | Using where |
+----+-------------+-------+------+-----------------+-----------------+---------+-------+------+-------------+

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7D22\u5F15\u5931\u6548\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15\u5931\u6548\u7684\u60C5\u51B5" aria-hidden="true">#</a> \u7D22\u5F15\u5931\u6548\u7684\u60C5\u51B5</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u7D22\u5F15\u6709\u5931\u6548\u7684\u65F6\u5019\uFF0C\u4EC0\u4E48\u65F6\u5019\u7D22\u5F15\u5931\u6548\u5462\uFF1F

\u5931\u6548\u7684\u7B2C1\u79CD\u60C5\u51B5\uFF1A
  select * from emp where ename like &#39;%T&#39;;

  ename\u4E0A\u5373\u4F7F\u6DFB\u52A0\u4E86\u7D22\u5F15\uFF0C\u4E5F\u4E0D\u4F1A\u8D70\u7D22\u5F15\uFF0C\u4E3A\u4EC0\u4E48\uFF1F
    \u539F\u56E0\u662F\u56E0\u4E3A\u6A21\u7CCA\u5339\u914D\u5F53\u4E2D\u4EE5\u201C%\u201D\u5F00\u5934\u4E86\uFF01\u5C3D\u91CF\u907F\u514D\u6A21\u7CCA\u67E5\u8BE2\u7684\u65F6\u5019\u4EE5\u201C%\u201D\u5F00\u59CB\u3002\u8FD9\u662F\u4E00\u79CD\u4F18\u5316\u7684\u624B\u6BB5/\u7B56\u7565\u3002

  mysql&gt; explain select * from emp where ename like &#39;%T&#39;;
  +----+-------------+-------+------+---------------+------+---------+------+------+-------------+
  | id | select_type | table | type | possible_keys | key  | key_len | ref  | rows | Extra       |
  +----+-------------+-------+------+---------------+------+---------+------+------+-------------+
  |  1 | SIMPLE      | emp   | ALL  | NULL          | NULL | NULL    | NULL |   14 | Using where |
  +----+-------------+-------+------+---------------+------+---------+------+------+-------------+

\u5931\u6548\u7684\u7B2C2\u79CD\u60C5\u51B5\uFF1A
  \u4F7F\u7528or\u7684\u65F6\u5019\u4F1A\u5931\u6548\uFF0C\u5982\u679C\u4F7F\u7528or\u90A3\u4E48\u8981\u6C42or\u4E24\u8FB9\u7684\u6761\u4EF6\u5B57\u6BB5\u90FD\u8981\u6709\u7D22\u5F15\uFF0C\u624D\u4F1A\u8D70\u7D22\u5F15\uFF0C\u5982\u679C\u5176\u4E2D\u4E00\u8FB9\u6709\u4E00\u4E2A\u5B57\u6BB5\u6CA1\u6709\u7D22\u5F15\uFF0C\u90A3\u4E48\u53E6\u4E00\u4E2A\u5B57\u6BB5\u4E0A\u7684\u7D22\u5F15\u4E5F\u4F1A\u5931\u6548\u3002\u6240\u4EE5\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u4E0D\u5EFA\u8BAE\u4F7F\u7528or\u7684\u539F\u56E0\u3002

  mysql&gt; explain select * from emp where ename = &#39;KING&#39; or job = &#39;MANAGER&#39;;
  +----+-------------+-------+------+-----------------+------+---------+------+------+-------------+
  | id | select_type | table | type | possible_keys   | key  | key_len | ref  | rows | Extra       |
  +----+-------------+-------+------+-----------------+------+---------+------+------+-------------+
  |  1 | SIMPLE      | emp   | ALL  | emp_ename_index | NULL | NULL    | NULL |   14 | Using where |
  +----+-------------+-------+------+-----------------+------+---------+------+------+-------------+

\u5931\u6548\u7684\u7B2C3\u79CD\u60C5\u51B5\uFF1A
  \u4F7F\u7528\u590D\u5408\u7D22\u5F15\u7684\u65F6\u5019\uFF0C\u6CA1\u6709\u4F7F\u7528\u5DE6\u4FA7\u7684\u5217\u67E5\u627E\uFF0C\u7D22\u5F15\u5931\u6548
  \u4EC0\u4E48\u662F\u590D\u5408\u7D22\u5F15\uFF1F
    \u4E24\u4E2A\u5B57\u6BB5\uFF0C\u6216\u8005\u66F4\u591A\u7684\u5B57\u6BB5\u8054\u5408\u8D77\u6765\u6DFB\u52A0\u4E00\u4E2A\u7D22\u5F15\uFF0C\u53EB\u505A\u590D\u5408\u7D22\u5F15\u3002
  
  create index emp_job_sal_index on emp(job,sal);
  
  mysql&gt; explain select * from emp where job = &#39;MANAGER&#39;;
  +----+-------------+-------+------+-------------------+-------------------+---------+-------+------+-------------+
  | id | select_type | table | type | possible_keys     | key               | key_len | ref   | rows | Extra       |
  +----+-------------+-------+------+-------------------+-------------------+---------+-------+------+-------------+
  |  1 | SIMPLE      | emp   | ref  | emp_job_sal_index | emp_job_sal_index | 30      | const |    3 | Using where |
  +----+-------------+-------+------+-------------------+-------------------+---------+-------+------+-------------+
  
  mysql&gt; explain select * from emp where sal = 800;
  +----+-------------+-------+------+---------------+------+---------+------+------+-------------+
  | id | select_type | table | type | possible_keys | key  | key_len | ref  | rows | Extra       |
  +----+-------------+-------+------+---------------+------+---------+------+------+-------------+
  |  1 | SIMPLE      | emp   | ALL  | NULL          | NULL | NULL    | NULL |   14 | Using where |
  +----+-------------+-------+------+---------------+------+---------+------+------+-------------+

\u5931\u6548\u7684\u7B2C4\u79CD\u60C5\u51B5\uFF1A
  \u5728where\u5F53\u4E2D\u7D22\u5F15\u5217\u53C2\u52A0\u4E86\u8FD0\u7B97\uFF0C\u7D22\u5F15\u5931\u6548\u3002
  mysql&gt; create index emp_sal_index on emp(sal);

  explain select * from emp where sal = 800;
  +----+-------------+-------+------+---------------+---------------+---------+-------+------+-------------+
  | id | select_type | table | type | possible_keys | key           | key_len | ref   | rows | Extra       |
  +----+-------------+-------+------+---------------+---------------+---------+-------+------+-------------+
  |  1 | SIMPLE      | emp   | ref  | emp_sal_index | emp_sal_index | 9       | const |    1 | Using where |
  +----+-------------+-------+------+---------------+---------------+---------+-------+------+-------------+

  mysql&gt; explain select * from emp where sal+1 = 800;
  +----+-------------+-------+------+---------------+------+---------+------+------+-------------+
  | id | select_type | table | type | possible_keys | key  | key_len | ref  | rows | Extra       |
  +----+-------------+-------+------+---------------+------+---------+------+------+-------------+
  |  1 | SIMPLE      | emp   | ALL  | NULL          | NULL | NULL    | NULL |   14 | Using where |
  +----+-------------+-------+------+---------------+------+---------+------+------+-------------+

\u5931\u6548\u7684\u7B2C5\u79CD\u60C5\u51B5\uFF1A
  \u5728where\u5F53\u4E2D\u7D22\u5F15\u5217\u4F7F\u7528\u4E86\u51FD\u6570
  explain select * from emp where lower(ename) = &#39;smith&#39;;
  +----+-------------+-------+------+---------------+------+---------+------+------+-------------+
  | id | select_type | table | type | possible_keys | key  | key_len | ref  | rows | Extra       |
  +----+-------------+-------+------+---------------+------+---------+------+------+-------------+
  |  1 | SIMPLE      | emp   | ALL  | NULL          | NULL | NULL    | NULL |   14 | Using where |
  +----+-------------+-------+------+---------------+------+---------+------+------+-------------+

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7D22\u5F15\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15\u5206\u7C7B" aria-hidden="true">#</a> \u7D22\u5F15\u5206\u7C7B</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u5355\u4E00\u7D22\u5F15\uFF1A\u4E00\u4E2A\u5B57\u6BB5\u4E0A\u6DFB\u52A0\u7D22\u5F15\u3002
\u590D\u5408\u7D22\u5F15\uFF1A\u4E24\u4E2A\u5B57\u6BB5\u6216\u8005\u66F4\u591A\u7684\u5B57\u6BB5\u4E0A\u6DFB\u52A0\u7D22\u5F15\u3002
\u4E3B\u952E\u7D22\u5F15\uFF1A\u4E3B\u952E\u4E0A\u6DFB\u52A0\u7D22\u5F15\u3002
\u552F\u4E00\u6027\u7D22\u5F15\uFF1A\u5177\u6709unique\u7EA6\u675F\u7684\u5B57\u6BB5\u4E0A\u6DFB\u52A0\u7D22\u5F15\u3002
.....
\u6CE8\u610F\uFF1A\u552F\u4E00\u6027\u6BD4\u8F83\u5F31\u7684\u5B57\u6BB5\u4E0A\u6DFB\u52A0\u7D22\u5F15\u7528\u5904\u4E0D\u5927\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u89C6\u56FE" tabindex="-1"><a class="header-anchor" href="#\u89C6\u56FE" aria-hidden="true">#</a> \u89C6\u56FE</h2><p>\u4EC0\u4E48\u662F\u89C6\u56FE\uFF1F</p><p>\u89C6\u56FE\uFF1A\u7AD9\u5728\u4E0D\u540C\u7684\u89D2\u5EA6\u53BB\u770B\u5F85\u540C\u4E00\u4EFD\u6570\u636E\u3002</p><h3 id="\u89C6\u56FE\u521B\u5EFA\u548C\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u89C6\u56FE\u521B\u5EFA\u548C\u5220\u9664" aria-hidden="true">#</a> \u89C6\u56FE\u521B\u5EFA\u548C\u5220\u9664</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u521B\u5EFA\u89C6\u56FE\u5BF9\u8C61\uFF1A
  create view dept2_view as select * from dept2;

\u5220\u9664\u89C6\u56FE\u5BF9\u8C61\uFF1A
  drop view dept2_view;

\u6CE8\u610F\uFF1A\u53EA\u6709DQL\u8BED\u53E5\u624D\u80FD\u4EE5view\u7684\u5F62\u5F0F\u521B\u5EFA\u3002
  create view view_name as \u8FD9\u91CC\u7684\u8BED\u53E5\u5FC5\u987B\u662FDQL\u8BED\u53E5;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u89C6\u56FE\u7684\u7528\u9014" tabindex="-1"><a class="header-anchor" href="#\u89C6\u56FE\u7684\u7528\u9014" aria-hidden="true">#</a> \u89C6\u56FE\u7684\u7528\u9014</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u300A\u65B9\u4FBF\uFF0C\u7B80\u5316\u5F00\u53D1\uFF0C\u5229\u4E8E\u7EF4\u62A4\u300B
\u6211\u4EEC\u53EF\u4EE5\u9762\u5411\u89C6\u56FE\u5BF9\u8C61\u8FDB\u884C\u589E\u5220\u6539\u67E5\uFF0C\u5BF9\u89C6\u56FE\u5BF9\u8C61\u7684\u589E\u5220\u6539\u67E5\uFF0C\u4F1A\u5BFC\u81F4\u539F\u8868\u88AB\u64CD\u4F5C\uFF01\uFF08\u89C6\u56FE\u7684\u7279\u70B9\uFF1A\u901A\u8FC7\u5BF9\u89C6\u56FE\u7684\u64CD\u4F5C\uFF0C\u4F1A\u5F71\u54CD\u5230\u539F\u8868\u6570\u636E\u3002\uFF09

//\u9762\u5411\u89C6\u56FE\u67E5\u8BE2
select * from dept2_view; 

// \u9762\u5411\u89C6\u56FE\u63D2\u5165
insert into dept2_view(deptno,dname,loc) values(60,&#39;SALES&#39;, &#39;BEIJING&#39;);

// \u67E5\u8BE2\u539F\u8868\u6570\u636E
mysql&gt; select * from dept2;
+--------+------------+----------+
| DEPTNO | DNAME      | LOC      |
+--------+------------+----------+
|     10 | ACCOUNTING | NEW YORK |
|     20 | RESEARCH   | DALLAS   |
|     30 | SALES      | CHICAGO  |
|     40 | OPERATIONS | BOSTON   |
|     60 | SALES      | BEIJING  |
+--------+------------+----------+

// \u9762\u5411\u89C6\u56FE\u5220\u9664
mysql&gt; delete from dept2_view;

// \u67E5\u8BE2\u539F\u8868\u6570\u636E
mysql&gt; select * from dept2;
Empty set (0.00 sec)

\u5047\u8BBE\u6709\u4E00\u6761\u975E\u5E38\u590D\u6742\u7684SQL\u8BED\u53E5\uFF0C\u800C\u8FD9\u6761SQL\u8BED\u53E5\u9700\u8981\u5728\u4E0D\u540C\u7684\u4F4D\u7F6E\u4E0A\u53CD\u590D\u4F7F\u7528\u3002\u6BCF\u4E00\u6B21\u4F7F\u7528\u8FD9\u4E2Asql\u8BED\u53E5\u7684\u65F6\u5019\u90FD\u9700\u8981\u91CD\u65B0\u7F16\u5199\uFF0C\u5F88\u957F\uFF0C\u5F88\u9EBB\u70E6\uFF0C\u600E\u4E48\u529E\uFF1F
  \u53EF\u4EE5\u628A\u8FD9\u6761\u590D\u6742\u7684SQL\u8BED\u53E5\u4EE5\u89C6\u56FE\u5BF9\u8C61\u7684\u5F62\u5F0F\u65B0\u5EFA\u3002\u5728\u9700\u8981\u7F16\u5199\u8FD9\u6761SQL\u8BED\u53E5\u7684\u4F4D\u7F6E\u76F4\u63A5\u4F7F\u7528\u89C6\u56FE\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u5927\u5927\u7B80\u5316\u5F00\u53D1\u3002\u5E76\u4E14\u5229\u4E8E\u540E\u671F\u7684\u7EF4\u62A4\uFF0C\u56E0\u4E3A\u4FEE\u6539\u7684\u65F6\u5019\u4E5F\u53EA\u9700\u8981\u4FEE\u6539\u4E00\u4E2A\u4F4D\u7F6E\u5C31\u884C\uFF0C\u53EA\u9700\u8981\u4FEE\u6539\u89C6\u56FE\u5BF9\u8C61\u6240\u6620\u5C04\u7684SQL\u8BED\u53E5\u3002

\u6211\u4EEC\u4EE5\u540E\u9762\u5411\u89C6\u56FE\u5F00\u53D1\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\u89C6\u56FE\u7684\u65F6\u5019\u53EF\u4EE5\u50CF\u4F7F\u7528table\u4E00\u6837\u3002\u53EF\u4EE5\u5BF9\u89C6\u56FE\u8FDB\u884C\u589E\u5220\u6539\u67E5\u7B49\u64CD\u4F5C\u3002\u89C6\u56FE\u4E0D\u662F\u5728\u5185\u5B58\u5F53\u4E2D\uFF0C\u89C6\u56FE\u5BF9\u8C61\u4E5F\u662F\u5B58\u50A8\u5728\u786C\u76D8\u4E0A\u7684\uFF0C\u4E0D\u4F1A\u6D88\u5931\u3002

\u518D\u63D0\u9192\u4E00\u4E0B\uFF1A
  \u89C6\u56FE\u5BF9\u5E94\u7684\u8BED\u53E5\u53EA\u80FD\u662FDQL\u8BED\u53E5\u3002\u4F46\u662F\u89C6\u56FE\u5BF9\u8C61\u521B\u5EFA\u5B8C\u6210\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5BF9\u89C6\u56FE\u8FDB\u884C\u589E\u5220\u6539\u67E5\u7B49\u64CD\u4F5C\u3002

  C:Create\uFF08\u589E\uFF09
  R:Retrive\uFF08\u67E5\uFF1A\u68C0\u7D22\uFF09
  U:Update\uFF08\u6539\uFF09
  D:Delete\uFF08\u5220\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dba\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#dba\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> DBA\u5E38\u7528\u547D\u4EE4</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u91CD\u70B9\u638C\u63E1\uFF1A
  \u6570\u636E\u7684\u5BFC\u5165\u548C\u5BFC\u51FA\uFF08\u6570\u636E\u7684\u5907\u4EFD\uFF09
  \u5176\u5B83\u547D\u4EE4\u4E86\u89E3\u4E00\u4E0B\u5373\u53EF\u3002

\u6570\u636E\u5BFC\u51FA\uFF1F
  \u6CE8\u610F\uFF1A\u5728windows\u7684dos\u547D\u4EE4\u7A97\u53E3\u4E2D\uFF1A
    mysqldump bjpowernode&gt;D:\\bjpowernode.sql -uroot -p123456
  
  \u53EF\u4EE5\u5BFC\u51FA\u6307\u5B9A\u7684\u8868\u5417\uFF1F
    mysqldump bjpowernode emp&gt;D:\\bjpowernode.sql -uroot -p123456

\u6570\u636E\u5BFC\u5165\uFF1F
  \u6CE8\u610F\uFF1A\u9700\u8981\u5148\u767B\u5F55\u5230mysql\u6570\u636E\u5E93\u670D\u52A1\u5668\u4E0A\u3002
  \u7136\u540E\u521B\u5EFA\u6570\u636E\u5E93\uFF1Acreate database bjpowernode;
  \u4F7F\u7528\u6570\u636E\u5E93\uFF1Ause bjpowernode
  \u7136\u540E\u521D\u59CB\u5316\u6570\u636E\u5E93\uFF1Asource D:\\bjpowernode.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6570\u636E\u5E93\u8BBE\u8BA1\u4E09\u8303\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u8BBE\u8BA1\u4E09\u8303\u5F0F" aria-hidden="true">#</a> \u6570\u636E\u5E93\u8BBE\u8BA1\u4E09\u8303\u5F0F</h2><blockquote><p>\u58F0\u660E\uFF1A\u4E09\u8303\u5F0F\u662F\u9762\u8BD5\u5B98\u7ECF\u5E38\u95EE\u7684\uFF0C\u6240\u4EE5\u4E00\u5B9A\u8981\u719F\u8BB0\u5728\u5FC3\uFF01</p></blockquote><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u4EC0\u4E48\u662F\u6570\u636E\u5E93\u8BBE\u8BA1\u8303\u5F0F\uFF1F
\u6570\u636E\u5E93\u8868\u7684\u8BBE\u8BA1\u4F9D\u636E\u3002\u6559\u4F60\u600E\u4E48\u8FDB\u884C\u6570\u636E\u5E93\u8868\u7684\u8BBE\u8BA1\u3002

\u6570\u636E\u5E93\u8BBE\u8BA1\u8303\u5F0F\u5171\u6709\uFF1F
3\u4E2A\u3002
\u7B2C\u4E00\u8303\u5F0F\uFF1A\u8981\u6C42\u4EFB\u4F55\u4E00\u5F20\u8868\u5FC5\u987B\u6709\u4E3B\u952E\uFF0C\u6BCF\u4E00\u4E2A\u5B57\u6BB5\u539F\u5B50\u6027\u4E0D\u53EF\u518D\u5206\u3002
\u7B2C\u4E8C\u8303\u5F0F\uFF1A\u5EFA\u7ACB\u5728\u7B2C\u4E00\u8303\u5F0F\u7684\u57FA\u7840\u4E4B\u4E0A\uFF0C\u8981\u6C42\u6240\u6709\u975E\u4E3B\u952E\u5B57\u6BB5\u5B8C\u5168\u4F9D\u8D56\u4E3B\u952E\uFF0C\u4E0D\u8981\u4EA7\u751F\u90E8\u5206\u4F9D\u8D56\u3002
\u7B2C\u4E09\u8303\u5F0F\uFF1A\u5EFA\u7ACB\u5728\u7B2C\u4E8C\u8303\u5F0F\u7684\u57FA\u7840\u4E4B\u4E0A\uFF0C\u8981\u6C42\u6240\u6709\u975E\u4E3B\u952E\u5B57\u6BB5\u76F4\u63A5\u4F9D\u8D56\u4E3B\u952E\uFF0C\u4E0D\u8981\u4EA7\u751F\u4F20\u9012\u4F9D\u8D56\u3002
\u8BBE\u8BA1\u6570\u636E\u5E93\u8868\u7684\u65F6\u5019\uFF0C\u6309\u7167\u4EE5\u4E0A\u7684\u8303\u5F0F\u8FDB\u884C\uFF0C\u53EF\u4EE5\u907F\u514D\u8868\u4E2D\u6570\u636E\u7684\u5197\u4F59\uFF0C\u7A7A\u95F4\u7684\u6D6A\u8D39\u3002

\u7B2C\u4E00\u8303\u5F0F
\u6700\u6838\u5FC3\uFF0C\u6700\u91CD\u8981\u7684\u8303\u5F0F\uFF0C\u6240\u6709\u8868\u7684\u8BBE\u8BA1\u90FD\u9700\u8981\u6EE1\u8DB3\u3002\u5FC5\u987B\u6709\u4E3B\u952E\uFF0C\u5E76\u4E14\u6BCF\u4E00\u4E2A\u5B57\u6BB5\u90FD\u662F\u539F\u5B50\u6027\u4E0D\u53EF\u518D\u5206\u3002

\u5B66\u751F\u7F16\u53F7 \u5B66\u751F\u59D3\u540D \u8054\u7CFB\u65B9\u5F0F
------------------------------------------
1001	\u5F20\u4E09		zs@gmail.com,1359999999
1002	\u674E\u56DB		ls@gmail.com,13699999999
1001	\u738B\u4E94		ww@163.net,13488888888

\u4EE5\u4E0A\u662F\u5B66\u751F\u8868\uFF0C\u6EE1\u8DB3\u7B2C\u4E00\u8303\u5F0F\u5417\uFF1F
\u4E0D\u6EE1\u8DB3\uFF0C\u7B2C\u4E00\uFF1A\u6CA1\u6709\u4E3B\u952E\u3002\u7B2C\u4E8C\uFF1A\u8054\u7CFB\u65B9\u5F0F\u53EF\u4EE5\u5206\u4E3A\u90AE\u7BB1\u5730\u5740\u548C\u7535\u8BDD

\u5B66\u751F\u7F16\u53F7(pk) 	\u5B66\u751F\u59D3\u540D	\u90AE\u7BB1\u5730\u5740			\u8054\u7CFB\u7535\u8BDD
----------------------------------------------------
1001			\u5F20\u4E09		zs@gmail.com	1359999999
1002			\u674E\u56DB		ls@gmail.com	13699999999
1003			\u738B\u4E94		ww@163.net		13488888888

\u7B2C\u4E8C\u8303\u5F0F\uFF1A
\u5EFA\u7ACB\u5728\u7B2C\u4E00\u8303\u5F0F\u7684\u57FA\u7840\u4E4B\u4E0A\uFF0C
\u8981\u6C42\u6240\u6709\u975E\u4E3B\u952E\u5B57\u6BB5\u5FC5\u987B\u5B8C\u5168\u4F9D\u8D56\u4E3B\u952E\uFF0C\u4E0D\u8981\u4EA7\u751F\u90E8\u5206\u4F9D\u8D56\u3002

\u5B66\u751F\u7F16\u53F7 \u5B66\u751F\u59D3\u540D \u6559\u5E08\u7F16\u53F7 \u6559\u5E08\u59D3\u540D
----------------------------------------------------
1001	\u5F20\u4E09		001		\u738B\u8001\u5E08
1002	\u674E\u56DB		002		\u8D75\u8001\u5E08
1003	\u738B\u4E94		001		\u738B\u8001\u5E08
1001	\u5F20\u4E09		002		\u8D75\u8001\u5E08

\u8FD9\u5F20\u8868\u63CF\u8FF0\u4E86\u5B66\u751F\u548C\u8001\u5E08\u7684\u5173\u7CFB\uFF1A\uFF081\u4E2A\u5B66\u751F\u53EF\u80FD\u6709\u591A\u4E2A\u8001\u5E08\uFF0C1\u4E2A\u8001\u5E08\u6709\u591A\u4E2A\u5B66\u751F\uFF09
\u8FD9\u662F\u975E\u5E38\u5178\u578B\u7684\uFF1A\u591A\u5BF9\u591A\u5173\u7CFB\uFF01

\u5206\u6790\u4EE5\u4E0A\u7684\u8868\u662F\u5426\u6EE1\u8DB3\u7B2C\u4E00\u8303\u5F0F\uFF1F
  \u4E0D\u6EE1\u8DB3\u7B2C\u4E00\u8303\u5F0F\u3002

\u600E\u4E48\u6EE1\u8DB3\u7B2C\u4E00\u8303\u5F0F\u5462\uFF1F\u4FEE\u6539

\u5B66\u751F\u7F16\u53F7+\u6559\u5E08\u7F16\u53F7(pk)		\u5B66\u751F\u59D3\u540D  \u6559\u5E08\u59D3\u540D
----------------------------------------------------
1001		001				\u5F20\u4E09		\u738B\u8001\u5E08
1002		002				\u674E\u56DB		\u8D75\u8001\u5E08
1003		001				\u738B\u4E94		\u738B\u8001\u5E08
1001		002				\u5F20\u4E09		\u8D75\u8001\u5E08

\u5B66\u751F\u7F16\u53F7 \u6559\u5E08\u7F16\u53F7\uFF0C\u4E24\u4E2A\u5B57\u6BB5\u8054\u5408\u505A\u4E3B\u952E\uFF0C\u590D\u5408\u4E3B\u952E\uFF08PK: \u5B66\u751F\u7F16\u53F7+\u6559\u5E08\u7F16\u53F7\uFF09
\u7ECF\u8FC7\u4FEE\u6539\u4E4B\u540E\uFF0C\u4EE5\u4E0A\u7684\u8868\u6EE1\u8DB3\u4E86\u7B2C\u4E00\u8303\u5F0F\u3002\u4F46\u662F\u6EE1\u8DB3\u7B2C\u4E8C\u8303\u5F0F\u5417\uFF1F
  \u4E0D\u6EE1\u8DB3\uFF0C\u201C\u5F20\u4E09\u201D\u4F9D\u8D561001\uFF0C\u201C\u738B\u8001\u5E08\u201D\u4F9D\u8D56001\uFF0C\u663E\u7136\u4EA7\u751F\u4E86\u90E8\u5206\u4F9D\u8D56\u3002
  \u4EA7\u751F\u90E8\u5206\u4F9D\u8D56\u6709\u4EC0\u4E48\u7F3A\u70B9\uFF1F
    \u6570\u636E\u5197\u4F59\u4E86\u3002\u7A7A\u95F4\u6D6A\u8D39\u4E86\u3002\u201C\u5F20\u4E09\u201D\u91CD\u590D\u4E86\uFF0C\u201C\u738B\u8001\u5E08\u201D\u91CD\u590D\u4E86\u3002

\u4E3A\u4E86\u8BA9\u4EE5\u4E0A\u7684\u8868\u6EE1\u8DB3\u7B2C\u4E8C\u8303\u5F0F\uFF0C\u4F60\u9700\u8981\u8FD9\u6837\u8BBE\u8BA1\uFF1A
  \u4F7F\u7528\u4E09\u5F20\u8868\u6765\u8868\u793A\u591A\u5BF9\u591A\u7684\u5173\u7CFB\uFF01\uFF01\uFF01\uFF01
  \u5B66\u751F\u8868
  \u5B66\u751F\u7F16\u53F7(pk)		\u5B66\u751F\u540D\u5B57
  ------------------------------------
  1001				\u5F20\u4E09
  1002				\u674E\u56DB
  1003				\u738B\u4E94
  
  \u6559\u5E08\u8868
  \u6559\u5E08\u7F16\u53F7(pk)		\u6559\u5E08\u59D3\u540D
  --------------------------------------
  001				\u738B\u8001\u5E08
  002				\u8D75\u8001\u5E08

  \u5B66\u751F\u6559\u5E08\u5173\u7CFB\u8868
  id(pk)			\u5B66\u751F\u7F16\u53F7(fk)			\u6559\u5E08\u7F16\u53F7(fk)
  ------------------------------------------------------
  1					1001						001
  2					1002						002
  3					1003						001
  4					1001						002


\u80CC\u53E3\u8BC0\uFF1A
  \u591A\u5BF9\u591A\u600E\u4E48\u8BBE\u8BA1\uFF1F
    \u591A\u5BF9\u591A\uFF0C\u4E09\u5F20\u8868\uFF0C\u5173\u7CFB\u8868\u4E24\u4E2A\u5916\u952E\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01

\u7B2C\u4E09\u8303\u5F0F
\u7B2C\u4E09\u8303\u5F0F\u5EFA\u7ACB\u5728\u7B2C\u4E8C\u8303\u5F0F\u7684\u57FA\u7840\u4E4B\u4E0A\uFF0C\u8981\u6C42\u6240\u6709\u975E\u4E3B\u952E\u5B57\u5178\u5FC5\u987B\u76F4\u63A5\u4F9D\u8D56\u4E3B\u952E\uFF0C\u4E0D\u8981\u4EA7\u751F\u4F20\u9012\u4F9D\u8D56\u3002

\u5B66\u751F\u7F16\u53F7\uFF08PK\uFF09 \u5B66\u751F\u59D3\u540D 	\u73ED\u7EA7\u7F16\u53F7  	\u73ED\u7EA7\u540D\u79F0
---------------------------------------------------------
  1001			\u5F20\u4E09		01		\u4E00\u5E74\u4E00\u73ED
  1002			\u674E\u56DB		02		\u4E00\u5E74\u4E8C\u73ED
  1003			\u738B\u4E94		03		\u4E00\u5E74\u4E09\u73ED
  1004			\u8D75\u516D		03		\u4E00\u5E74\u4E09\u73ED

\u4EE5\u4E0A\u8868\u7684\u8BBE\u8BA1\u662F\u63CF\u8FF0\uFF1A\u73ED\u7EA7\u548C\u5B66\u751F\u7684\u5173\u7CFB\u3002\u5F88\u663E\u7136\u662F1\u5BF9\u591A\u5173\u7CFB\uFF01
\u4E00\u4E2A\u6559\u5BA4\u4E2D\u6709\u591A\u4E2A\u5B66\u751F\u3002

\u5206\u6790\u4EE5\u4E0A\u8868\u662F\u5426\u6EE1\u8DB3\u7B2C\u4E00\u8303\u5F0F\uFF1F
  \u6EE1\u8DB3\u7B2C\u4E00\u8303\u5F0F\uFF0C\u6709\u4E3B\u952E\u3002

\u5206\u6790\u4EE5\u4E0A\u8868\u662F\u5426\u6EE1\u8DB3\u7B2C\u4E8C\u8303\u5F0F\uFF1F
  \u6EE1\u8DB3\u7B2C\u4E8C\u8303\u5F0F\uFF0C\u56E0\u4E3A\u4E3B\u952E\u4E0D\u662F\u590D\u5408\u4E3B\u952E\uFF0C\u6CA1\u6709\u4EA7\u751F\u90E8\u5206\u4F9D\u8D56\u3002\u4E3B\u952E\u662F\u5355\u4E00\u4E3B\u952E\u3002

\u5206\u6790\u4EE5\u4E0A\u8868\u662F\u5426\u6EE1\u8DB3\u7B2C\u4E09\u8303\u5F0F\uFF1F
  \u7B2C\u4E09\u8303\u5F0F\u8981\u6C42\uFF1A\u4E0D\u8981\u4EA7\u751F\u4F20\u9012\u4F9D\u8D56\uFF01
  \u4E00\u5E74\u4E00\u73ED\u4F9D\u8D5601\uFF0C01\u4F9D\u8D561001\uFF0C\u4EA7\u751F\u4E86\u4F20\u9012\u4F9D\u8D56\u3002
  \u4E0D\u7B26\u5408\u7B2C\u4E09\u8303\u5F0F\u7684\u8981\u6C42\u3002\u4EA7\u751F\u4E86\u6570\u636E\u7684\u5197\u4F59\u3002

\u90A3\u4E48\u5E94\u8BE5\u600E\u4E48\u8BBE\u8BA1\u4E00\u5BF9\u591A\u5462\uFF1F

  \u73ED\u7EA7\u8868\uFF1A\u4E00
  \u73ED\u7EA7\u7F16\u53F7(pk)				\u73ED\u7EA7\u540D\u79F0
  ----------------------------------------
  01						\u4E00\u5E74\u4E00\u73ED
  02						\u4E00\u5E74\u4E8C\u73ED
  03						\u4E00\u5E74\u4E09\u73ED

  \u5B66\u751F\u8868\uFF1A\u591A

  \u5B66\u751F\u7F16\u53F7\uFF08PK\uFF09 \u5B66\u751F\u59D3\u540D \u73ED\u7EA7\u7F16\u53F7(fk)
  -------------------------------------------
  1001			\u5F20\u4E09			01			
  1002			\u674E\u56DB			02			
  1003			\u738B\u4E94			03			
  1004			\u8D75\u516D			03		
  
  \u80CC\u53E3\u8BC0\uFF1A
    \u4E00\u5BF9\u591A\uFF0C\u4E24\u5F20\u8868\uFF0C\u591A\u7684\u8868\u52A0\u5916\u952E\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u603B\u7ED3\u8868\u7684\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3\u8868\u7684\u8BBE\u8BA1" aria-hidden="true">#</a> \u603B\u7ED3\u8868\u7684\u8BBE\u8BA1</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u4E00\u5BF9\u591A\uFF1A
  \u4E00\u5BF9\u591A\uFF0C\u4E24\u5F20\u8868\uFF0C\u591A\u7684\u8868\u52A0\u5916\u952E\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01

\u591A\u5BF9\u591A\uFF1A
  \u591A\u5BF9\u591A\uFF0C\u4E09\u5F20\u8868\uFF0C\u5173\u7CFB\u8868\u4E24\u4E2A\u5916\u952E\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01

\u4E00\u5BF9\u4E00\uFF1A
\u4E00\u5BF9\u4E00\u653E\u5230\u4E00\u5F20\u8868\u4E2D\u4E0D\u5C31\u884C\u4E86\u5417\uFF1F\u4E3A\u5565\u8FD8\u8981\u62C6\u5206\u8868\uFF1F
\u5728\u5B9E\u9645\u7684\u5F00\u53D1\u4E2D\uFF0C\u53EF\u80FD\u5B58\u5728\u4E00\u5F20\u8868\u5B57\u6BB5\u592A\u591A\uFF0C\u592A\u5E9E\u5927\u3002\u8FD9\u4E2A\u65F6\u5019\u8981\u62C6\u5206\u8868\u3002
\u4E00\u5BF9\u4E00\u600E\u4E48\u8BBE\u8BA1\uFF1F
  \u6CA1\u6709\u62C6\u5206\u8868\u4E4B\u524D\uFF1A\u4E00\u5F20\u8868
    t_user
    id		login_name		login_pwd		real_name		email				address........
    ---------------------------------------------------------------------------
    1		zhangsan		123				\u5F20\u4E09				zhangsan@xxx
    2		lisi			123				\u674E\u56DB				lisi@xxx
    ...
  
  \u8FD9\u79CD\u5E9E\u5927\u7684\u8868\u5EFA\u8BAE\u62C6\u5206\u4E3A\u4E24\u5F20\uFF1A
    t_login \u767B\u5F55\u4FE1\u606F\u8868
    id(pk)		login_name		login_pwd	
    ---------------------------------
    1			zhangsan		123			
    2			lisi			123			

    t_user \u7528\u6237\u8BE6\u7EC6\u4FE1\u606F\u8868
    id(pk)		real_name		email				address........	login_id(fk+unique)
    -----------------------------------------------------------------------------------------
    100			\u5F20\u4E09				zhangsan@xxx								1
    200			\u674E\u56DB				lisi@xxx									2

    \u53E3\u8BC0\uFF1A\u4E00\u5BF9\u4E00\uFF0C\u5916\u952E\u552F\u4E00\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01\uFF01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5631\u5490" tabindex="-1"><a class="header-anchor" href="#\u5631\u5490" aria-hidden="true">#</a> \u5631\u5490</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>\u6570\u636E\u5E93\u8BBE\u8BA1\u4E09\u8303\u5F0F\u662F\u7406\u8BBA\u4E0A\u7684\u3002

\u5B9E\u8DF5\u548C\u7406\u8BBA\u6709\u7684\u65F6\u5019\u6709\u504F\u5DEE\u3002

\u6700\u7EC8\u7684\u76EE\u7684\u90FD\u662F\u4E3A\u4E86\u6EE1\u8DB3\u5BA2\u6237\u7684\u9700\u6C42\uFF0C\u6709\u7684\u65F6\u5019\u4F1A\u62FF\u5197\u4F59\u6362\u6267\u884C\u901F\u5EA6\u3002

\u56E0\u4E3A\u5728sql\u5F53\u4E2D\uFF0C\u8868\u548C\u8868\u4E4B\u95F4\u8FDE\u63A5\u6B21\u6570\u8D8A\u591A\uFF0C\u6548\u7387\u8D8A\u4F4E\u3002\uFF08\u7B1B\u5361\u5C14\u79EF\uFF09

\u6709\u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u5B58\u5728\u5197\u4F59\uFF0C\u4F46\u662F\u4E3A\u4E86\u51CF\u5C11\u8868\u7684\u8FDE\u63A5\u6B21\u6570\uFF0C\u8FD9\u6837\u505A\u4E5F\u662F\u5408\u7406\u7684\uFF0C
\u5E76\u4E14\u5BF9\u4E8E\u5F00\u53D1\u4EBA\u5458\u6765\u8BF4\uFF0Csql\u8BED\u53E5\u7684\u7F16\u5199\u96BE\u5EA6\u4E5F\u4F1A\u964D\u4F4E\u3002

\u9762\u8BD5\u7684\u65F6\u5019\u628A\u8FD9\u53E5\u8BDD\u8BF4\u4E0A\uFF1A\u4ED6\u5C31\u4E0D\u4F1A\u8BA4\u4E3A\u4F60\u662F\u521D\u7EA7\u7A0B\u5E8F\u5458\u4E86\uFF01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,124),v=[d];function a(r,m){return i(),e("div",null,v)}var b=n(l,[["render",a],["__file","\u8001\u675CMySQL.html.vue"]]);export{b as default};
