import { GoogleSpreadsheet } from 'google-spreadsheet';
import { config } from '../config';

const setup = async () => {
  const doc = new GoogleSpreadsheet(config.SPREADSHEET_ID);
  await doc.useServiceAccountAuth({
    client_email: config.CLIENT_EMAIL || '',
    private_key: config.PRIVATE_KEY || '',
  });
  await doc.loadInfo();
  return doc
}

export const getResponsesForIntent = async (intent: string) => {
  const doc = await setup()
  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows()
  const rowsForIntent = rows.filter(row => row['Intent'] === intent)
  if (rowsForIntent.length === 0) {
    return rows.filter(row => row['Intent'] === 'default')[0]['Texto'] as string[]
  }
  return rowsForIntent.map(row => row['Texto']) as string[]
}