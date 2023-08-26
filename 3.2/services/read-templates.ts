import fs = require("fs");
import path = require("path");

const filePath = (fileName: string): string => path.join(__dirname, fileName);

export async function getPageTemplate(
  page: string
): Promise<string | undefined> {
  try {
    const header = await fs.promises.readFile(
      filePath("../view/header.html"),
      "utf-8"
    );
    const footer = await fs.promises.readFile(
      filePath("../view/footer.html"),
      "utf-8"
    );
    const template = await fs.promises.readFile(filePath(page), "utf-8");
    return template
      .replace("<section>%header%</section>", header)
      .replace("<section>%footer%</section>", footer);
  } catch (error) {
    console.error(error);
  }
}