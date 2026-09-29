// output 파일 저장 — 헤더 메타데이터 자동 삽입
// 사용: node scripts/save-blocks.mjs <agent> <input-path> <output-path> <content-file>
import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const [agent, inputPath, outputPath, contentFile] = process.argv.slice(2);

if (!agent || !outputPath || !contentFile) {
  console.error("사용법: node save-blocks.mjs <agent> <input-path> <output-path> <content-file>");
  process.exit(1);
}

const defaults = yaml.load(
  fs.readFileSync(path.resolve(import.meta.dirname, "../defaults.yaml"), "utf8")
);

const timestamp = new Date().toISOString();
const header = defaults.output.header_template
  .replace("{agent}", agent)
  .replace("{input}", inputPath || "—")
  .replace("{timestamp}", timestamp);

const content = fs.readFileSync(contentFile, "utf8");
const ROOT = path.resolve(import.meta.dirname, "../..");
const fullOutputPath = path.join(ROOT, outputPath);

fs.mkdirSync(path.dirname(fullOutputPath), { recursive: true });
fs.writeFileSync(fullOutputPath, `${header}\n\n${content}`, "utf8");

console.log(`[SAVED] ${outputPath}`);
