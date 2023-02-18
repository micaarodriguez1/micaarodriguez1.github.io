window.jsPDF = window.jspdf.jsPDF;
window.html2canvas = html2canvas;


const btn = document.querySelector('#boton');
function generarPDF()
{
    html2canvas(document.querySelector("#capture"), {
        allowTaint: true,
        useCORS: true,
        scale: 1,
    }).then(canvas => {
        const doc = new jsPDF('p', 'pt', 'a4');
        var width = doc.internal.pageSize.getWidth();
        var height = doc.internal.pageSize.getHeight();
        let img = canvas.toDataURL("image/png");
        doc.setFont('Arial');
        doc.setFontSize(11);
        doc.addImage(img, 'PNG', 0, 0, width, height);
        doc.save('MICA.pdf');
    });
}