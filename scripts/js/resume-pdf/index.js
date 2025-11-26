(function(){
  const { jsPDF } = window.jspdf || {};
  if(!jsPDF) return;

  async function generateResumePDF(){
    const imgUrl = 'assets/images/mei-wong.webp';
    let imgData = null;
    try{
      imgData = await new Promise((resolve)=>{
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function(){
          const size = Math.min(img.width, img.height);
          const sx = (img.width - size) / 2;
          const sy = (img.height - size) / 2;
          const canvas = document.createElement('canvas');
          const outSize = 120;
          canvas.width = outSize; canvas.height = outSize;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, sx, sy, size, size, 0, 0, outSize, outSize);
          resolve(canvas.toDataURL('image/jpeg', 0.9));
        };
        img.onerror = function(){ resolve(null); };
        img.src = imgUrl;
      });
    }catch(e){ imgData = null; }

    const doc = new jsPDF({unit:'pt', format:'a4'});
    const left = 40;
    let y = 40;

    if(imgData){ doc.addImage(imgData, 'JPEG', left, y, 80, 80); }

    const nameX = left + (imgData ? 100 : 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text('Mei Wong', nameX, y + 30);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text('Software Developer', nameX, y + 50);
    doc.setFontSize(10);
    doc.text('Email: mei@example.com | Phone: (555) 123-4567', nameX, y + 68);

    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.line(left, y + 95, 555, y + 95);
    y += 110;

    doc.setFont('helvetica', 'bold'); doc.setFontSize(14);
    doc.text('Summary', left, y);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(11);
    y += 18;
    doc.text('Passionate software developer with experience building responsive web applications using HTML, CSS, JavaScript and Bootstrap. Strong focus on usability and clean, accessible designs.', left, y, {maxWidth:510});
    y += 70;

    doc.setFont('helvetica', 'bold'); doc.setFontSize(14);
    doc.text('Experience', left, y);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(11);
    y += 18;
    doc.text('- Frontend Developer, Example Co — 2023–2025. Built responsive client interfaces and improved performance across multiple web properties.', left + 4, y, {maxWidth:510});
    y += 36;
    doc.text('- Junior Developer, Example Studio — 2021–2023. Contributed to UI components and assisted with accessibility improvements.', left + 4, y, {maxWidth:510});
    y += 50;

    doc.setFont('helvetica', 'bold'); doc.setFontSize(14);
    doc.text('Education', left, y);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(11);
    y += 18;
    doc.text('BSc Computer Science — Fictional University', left + 4, y);
    y += 30;

    doc.setFont('helvetica', 'bold'); doc.setFontSize(14);
    doc.text('Skills', left, y);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(11);
    y += 18;
    doc.text('HTML, CSS, JavaScript, Bootstrap, Responsive Design, Accessibility', left + 4, y, {maxWidth:510});

    doc.save('Mei-Wong-Resume-2025.pdf');
  }

  const downloadPdfBtn = document.getElementById('downloadResumePdf');
  if(downloadPdfBtn){
    downloadPdfBtn.addEventListener('click', ()=>{ generateResumePDF(); });
  }
})();
