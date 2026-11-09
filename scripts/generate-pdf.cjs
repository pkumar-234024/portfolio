const fs = require('fs');
const path = require('path');

function generateCoverLetterPDF(outputPath) {
  function escapePdfString(str) {
    return str
      .replace(/\\/g, '\\\\')
      .replace(/\(/g, '\\(')
      .replace(/\)/g, '\\)')
      .replace(/[\u2013\u2014]/g, '-')
      .replace(/[\u201C\u201D]/g, '"')
      .replace(/[\u2018\u2019]/g, "'");
  }

  function wordWrap(text, maxChars) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      if (!currentLine) {
        currentLine = word;
      } else if ((currentLine + ' ' + word).length <= maxChars) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
    return lines;
  }

  let stream = '';

  // Top header accent line
  stream += 'q\n';
  stream += '0.29 0.33 0.85 rg\n'; // Indigo brand color
  stream += '50 786 495 4 re f\n';
  stream += 'Q\n';

  // Candidate Name
  stream += 'BT\n';
  stream += '/F1 22 Tf\n';
  stream += '0.12 0.14 0.22 rg\n'; // Dark navy text
  stream += '50 754 Td\n';
  stream += '(' + escapePdfString('PRAVEEN KUMAR') + ') Tj\n';
  stream += 'ET\n';

  // Professional Title
  stream += 'BT\n';
  stream += '/F1 11 Tf\n';
  stream += '0.29 0.33 0.85 rg\n'; // Indigo
  stream += '50 738 Td\n';
  stream += '(' + escapePdfString('SDE I  |  Full-Stack .NET Developer  |  AI-Assisted Engineering') + ') Tj\n';
  stream += 'ET\n';

  // Contact Info
  stream += 'BT\n';
  stream += '/F2 9 Tf\n';
  stream += '0.35 0.40 0.48 rg\n'; // Slate gray
  stream += '50 722 Td\n';
  stream += '(' + escapePdfString('Noida, UP, India   *   praveen991210@gmail.com   *   +91 800-524-1110') + ') Tj\n';
  stream += 'ET\n';

  // Links
  stream += 'BT\n';
  stream += '/F2 9 Tf\n';
  stream += '0.35 0.40 0.48 rg\n';
  stream += '50 708 Td\n';
  stream += '(' + escapePdfString('LinkedIn: linkedin.com/in/praveen991210   *   GitHub: github.com/pkumar-234024') + ') Tj\n';
  stream += 'ET\n';

  // Divider line
  stream += 'q\n';
  stream += '0.85 0.88 0.92 RG\n'; // Light slate border
  stream += '1 w\n';
  stream += '50 696 m 545 696 l S\n';
  stream += 'Q\n';

  // Date & Recipient Details
  let currentY = 665;
  stream += 'BT\n';
  stream += '/F2 9.5 Tf\n';
  stream += '0.40 0.44 0.52 rg\n';
  stream += `50 ${currentY} Td\n`;
  stream += '(' + escapePdfString('Date: November 2026') + ') Tj\n';
  stream += 'ET\n';

  currentY -= 20;
  stream += 'BT\n';
  stream += '/F1 10 Tf\n';
  stream += '0.12 0.14 0.22 rg\n';
  stream += `50 ${currentY} Td\n`;
  stream += '(' + escapePdfString('To: The Hiring Team / Engineering Leadership') + ') Tj\n';
  stream += 'ET\n';

  currentY -= 14;
  stream += 'BT\n';
  stream += '/F2 9.5 Tf\n';
  stream += '0.35 0.40 0.48 rg\n';
  stream += `50 ${currentY} Td\n`;
  stream += '(' + escapePdfString('Subject: Application for Senior / Full-Stack .NET Developer') + ') Tj\n';
  stream += 'ET\n';

  currentY -= 28;

  // Salutation
  stream += 'BT\n';
  stream += '/F1 10.5 Tf\n';
  stream += '0.12 0.14 0.22 rg\n';
  stream += `50 ${currentY} Td\n`;
  stream += '(' + escapePdfString('Dear Hiring Manager,') + ') Tj\n';
  stream += 'ET\n';

  currentY -= 20;

  // Body paragraphs
  const paragraphs = [
    'I am excited to submit my application for the Full-Stack / Senior .NET Developer position. With over 5 years of hands-on experience across the modern Microsoft .NET ecosystem - including C#, ASP.NET Core, RESTful Web APIs, Entity Framework Core, and Microsoft SQL Server - I specialize in building scalable, secure, and resilient enterprise applications.',
    'In my current role as SDE I at Momentum Pvt. Ltd. (Urban Harvest & Deliverit), I architect and optimize high-throughput backend services and REST APIs supporting quick-commerce and supply chain logistics. My work includes tuning SQL stored procedures and database indexing to reduce latency by 35% during peak traffic, as well as applying Clean Architecture, CQRS, and Repository patterns to guarantee long-term maintainability.',
    'Additionally, I actively leverage modern AI-assisted engineering tools - such as Cursor, Claude Code, Google Antigravity, and OpenAI Codex - to accelerate test coverage authoring, complex refactoring, and sprint velocity without compromising rigorous architectural standards. Combined with my prior 5 years of full-stack engineering at Intellisoft Technologies, I bring proven leadership in delivering mission-critical web applications from concept to production.',
    'I welcome the opportunity to discuss how my technical expertise in scalable backend architectures and AI-augmented developer practices will add immediate value to your engineering team. Thank you for your time and consideration.'
  ];

  for (const para of paragraphs) {
    const lines = wordWrap(para, 84);
    for (const line of lines) {
      stream += 'BT\n';
      stream += '/F2 10 Tf\n';
      stream += '0.20 0.23 0.30 rg\n';
      stream += `50 ${currentY} Td\n`;
      stream += '(' + escapePdfString(line) + ') Tj\n';
      stream += 'ET\n';
      currentY -= 15;
    }
    currentY -= 10;
  }

  // Sign off
  currentY -= 6;
  stream += 'BT\n';
  stream += '/F2 10 Tf\n';
  stream += '0.20 0.23 0.30 rg\n';
  stream += `50 ${currentY} Td\n`;
  stream += '(' + escapePdfString('Sincerely,') + ') Tj\n';
  stream += 'ET\n';

  currentY -= 20;
  stream += 'BT\n';
  stream += '/F1 11 Tf\n';
  stream += '0.12 0.14 0.22 rg\n';
  stream += `50 ${currentY} Td\n`;
  stream += '(' + escapePdfString('Praveen Kumar') + ') Tj\n';
  stream += 'ET\n';

  currentY -= 13;
  stream += 'BT\n';
  stream += '/F2 9 Tf\n';
  stream += '0.45 0.50 0.58 rg\n';
  stream += `50 ${currentY} Td\n`;
  stream += '(' + escapePdfString('SDE I @ Momentum Pvt. Ltd. | Full-Stack .NET Developer') + ') Tj\n';
  stream += 'ET\n';

  // Footer bar
  stream += 'q\n';
  stream += '0.90 0.92 0.95 RG\n';
  stream += '0.75 w\n';
  stream += '50 45 m 545 45 l S\n';
  stream += 'Q\n';

  stream += 'BT\n';
  stream += '/F2 8 Tf\n';
  stream += '0.55 0.60 0.68 rg\n';
  stream += '50 32 Td\n';
  stream += '(' + escapePdfString('Praveen Kumar - Cover Letter  *  praveen991210@gmail.com  *  Noida, UP, India') + ') Tj\n';
  stream += 'ET\n';

  const streamBuf = Buffer.from(stream, 'utf-8');

  const obj1 = '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n';
  const obj2 = '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n';
  const obj3 = '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 6 0 R /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> >>\nendobj\n';
  const obj4 = '4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n';
  const obj5 = '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n';
  const obj6Header = `6 0 obj\n<< /Length ${streamBuf.length} >>\nstream\n`;
  const obj6Footer = '\nendstream\nendobj\n';

  const header = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n';

  const offsets = [];
  let currentOffset = Buffer.byteLength(header);

  offsets.push(currentOffset);
  currentOffset += Buffer.byteLength(obj1);

  offsets.push(currentOffset);
  currentOffset += Buffer.byteLength(obj2);

  offsets.push(currentOffset);
  currentOffset += Buffer.byteLength(obj3);

  offsets.push(currentOffset);
  currentOffset += Buffer.byteLength(obj4);

  offsets.push(currentOffset);
  currentOffset += Buffer.byteLength(obj5);

  offsets.push(currentOffset);
  currentOffset += Buffer.byteLength(obj6Header) + streamBuf.length + Buffer.byteLength(obj6Footer);

  let xref = 'xref\n0 7\n0000000000 65535 f \r\n';
  for (const off of offsets) {
    xref += String(off).padStart(10, '0') + ' 00000 n \r\n';
  }

  const trailer = `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${currentOffset}\n%%EOF\n`;

  const finalPdf = Buffer.concat([
    Buffer.from(header),
    Buffer.from(obj1),
    Buffer.from(obj2),
    Buffer.from(obj3),
    Buffer.from(obj4),
    Buffer.from(obj5),
    Buffer.from(obj6Header),
    streamBuf,
    Buffer.from(obj6Footer),
    Buffer.from(xref),
    Buffer.from(trailer)
  ]);

  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputPath, finalPdf);
  console.log('Generated PDF: ' + outputPath + ' (' + finalPdf.length + ' bytes)');
}

generateCoverLetterPDF(path.join(__dirname, '../public/Resumecv/PRAVEEN-COVER-LETTER.pdf'));
generateCoverLetterPDF(path.join(__dirname, '../public/Resumecv/coverletter.pdf'));

