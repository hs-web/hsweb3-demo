package org.hswebframework.web.demo;

import io.github.swagger2markup.GroupBy;
import io.github.swagger2markup.Language;
import io.github.swagger2markup.Swagger2MarkupConfig;
import io.github.swagger2markup.Swagger2MarkupConverter;
import io.github.swagger2markup.builder.Swagger2MarkupConfigBuilder;
import io.github.swagger2markup.markup.builder.MarkupLanguage;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.net.URL;
import java.nio.file.Paths;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class DemoApplicationTests {

	@Test
	public void generateAsciiDocs() throws Exception {
		//	输出Ascii格式
		Swagger2MarkupConfig config = new Swagger2MarkupConfigBuilder()
				.withMarkupLanguage(MarkupLanguage.ASCIIDOC)
				.withOutputLanguage(Language.ZH)
				.withPathsGroupedBy(GroupBy.TAGS)
				.withGeneratedExamples()
				.withoutInlineSchema()
				.build();

		Swagger2MarkupConverter.from(new URL("http://localhost:8080/v2/api-docs"))
				.withConfig(config)
				.build()
				.toFolder(Paths.get("./docs/asciidoc/generated"));
	}

	@Test
	public void generateMarkdownDocs() throws Exception {
		//	输出Markdown格式
		Swagger2MarkupConfig config = new Swagger2MarkupConfigBuilder()
				.withMarkupLanguage(MarkupLanguage.MARKDOWN)
				.withOutputLanguage(Language.ZH)
				.withPathsGroupedBy(GroupBy.TAGS)
				.withGeneratedExamples()
				.withoutInlineSchema()				.build();

		Swagger2MarkupConverter.from(new URL("http://localhost:8080/v2/api-docs"))
				.withConfig(config)
				.build()
				.toFolder(Paths.get("./docs/markdown/generated"));
	}

	@Test
	public void generateConfluenceDocs() throws Exception {
		//	输出Confluence使用的格式
		Swagger2MarkupConfig config = new Swagger2MarkupConfigBuilder()
				.withMarkupLanguage(MarkupLanguage.CONFLUENCE_MARKUP)
				.withOutputLanguage(Language.ZH)
				.withPathsGroupedBy(GroupBy.TAGS)
				.withGeneratedExamples()
				.withoutInlineSchema()
				.build();

		Swagger2MarkupConverter.from(new URL("http://localhost:8080/v2/api-docs"))
				.withConfig(config)
				.build()
				.toFolder(Paths.get("./docs/confluence/generated"));
	}

	@Test
	public void generateAsciiDocsToFile() throws Exception {
		//	输出Ascii到单文件
		Swagger2MarkupConfig config = new Swagger2MarkupConfigBuilder()
				.withMarkupLanguage(MarkupLanguage.ASCIIDOC)
				.withOutputLanguage(Language.ZH)
				.withPathsGroupedBy(GroupBy.TAGS)
				.withGeneratedExamples()
				.withoutInlineSchema()				.build();

		Swagger2MarkupConverter.from(new URL("http://localhost:8080/v2/api-docs"))
				.withConfig(config)
				.build()
				.toFile(Paths.get("./docs/asciidoc/generated/all"));
	}

	@Test
	public void generateMarkdownDocsToFile() throws Exception {
		//	输出Markdown到单文件
		Swagger2MarkupConfig config = new Swagger2MarkupConfigBuilder()
				.withMarkupLanguage(MarkupLanguage.MARKDOWN)
				.withOutputLanguage(Language.ZH)
				.withPathsGroupedBy(GroupBy.TAGS)
				.withGeneratedExamples()
				.withoutInlineSchema()
				.build();

		Swagger2MarkupConverter.from(new URL("http://localhost:8080/v2/api-docs"))
				.withConfig(config)
				.build()
				.toFile(Paths.get("./docs/markdown/generated/all"));
	}

}
