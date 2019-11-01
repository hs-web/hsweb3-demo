package org.hswebframework.web.demo.controller;

import org.apache.avalon.framework.configuration.Configuration;
import org.apache.avalon.framework.configuration.DefaultConfigurationBuilder;
import org.hswebframework.printer.Pager;
import org.hswebframework.printer.Paper;
import org.hswebframework.printer.PixelPaper;
import org.hswebframework.printer.PrinterUtils;
import org.hswebframework.printer.builder.JsonPageBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.PostConstruct;
import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletResponse;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.List;

/**
 * @author zhouhao
 * @since 1.0
 */
@Controller
@RequestMapping("/printer")
public class PrinterController {

    private JsonPageBuilder builder = new JsonPageBuilder();

    @Autowired(required = false)
    private Configuration configuration;

    private String fopLocation = "./config/fop-configuration.xml";

    public void setFopLocation(String fopLocation) {
        this.fopLocation = fopLocation;
    }

    @PostConstruct
    public void init() {
        try {
            configuration = new DefaultConfigurationBuilder().build(fopLocation);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @PostMapping(value = "/svg")
    public void toSvg(@RequestParam String config, HttpServletResponse response) throws IOException {
        List<Pager> pagers = builder.build(config);
        List<String> svg = PrinterUtils.printToSvg(pagers);
        response.setContentType(MediaType.TEXT_HTML_VALUE);
        response.setCharacterEncoding("utf-8");
        response.getWriter().println("<!DOCTYPE html>\n" +
                "<html><style type='text/css'>svg{" +
                "width:" + (Paper.A4.getWidth()) + "mm;" +
                "height:" + (Paper.A4.getHeight()) + "mm;" +
                "}</style>\n" +
                "<body style='width:100%'>");
        for (String s : svg) {
            response.getWriter().println(s);
            response.getWriter().println("<br>");
        }
        response.getWriter().println("</body>\n" +
                "</html>");
    }

    @PostMapping(value = "/image")
    public void toImage(@RequestParam String config, HttpServletResponse response) throws IOException {
        List<Pager> pagers = builder.build(config);
        response.setContentType(MediaType.IMAGE_PNG_VALUE);
        BufferedImage image = PrinterUtils.printToImage(pagers, new PixelPaper(72D, Paper.A4));
        ImageIO.write(image, "png", response.getOutputStream());
    }


    @PostMapping(value = "/pdf")
    public void toPdf(@RequestParam String config, HttpServletResponse response) throws Exception {
        List<Pager> pagers = builder.build(config);
        response.setContentType(MediaType.APPLICATION_PDF_VALUE);
        PrinterUtils
                .printToPdf(pagers
                        , new PixelPaper(72, Paper.A4)
                        , response.getOutputStream()
                        , configuration);
    }
}
