// =============================================
//  COLE ESTE CÓDIGO NO GOOGLE APPS SCRIPT
//  Veja o README.md para instruções completas
// =============================================

function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Movimentos');

  if (!sheet) {
    sheet = ss.insertSheet('Movimentos');
    sheet.appendRow(['tipo','cor','tam','qtd','obs','dt','ts']);
  }

  const action = e.parameter.action;

  if (action === 'read') {
    const lastRow = sheet.getLastRow();
    if (lastRow <= 1) return respond({ ok: true, movs: [] });
    const data = sheet.getRange(2, 1, lastRow - 1, 7).getValues();
    const movs = data.map(row => ({
      tipo: row[0], cor: row[1], tam: row[2],
      qtd: Number(row[3]), obs: row[4], dt: row[5], ts: Number(row[6])
    })).reverse();
    return respond({ ok: true, movs });
  }

  if (action === 'add') {
    const mov = JSON.parse(e.parameter.mov);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['tipo','cor','tam','qtd','obs','dt','ts']);
    }
    sheet.appendRow([mov.tipo, mov.cor, mov.tam, mov.qtd, mov.obs || '', mov.dt, mov.ts]);
    return respond({ ok: true });
  }

  if (action === 'clear') {
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) sheet.deleteRows(2, lastRow - 1);
    return respond({ ok: true });
  }

  return respond({ ok: false, error: 'Ação desconhecida' });
}

function respond(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
