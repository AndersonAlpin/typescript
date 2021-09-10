type Id = number | string;
type Platform = 'Windows' | 'Linux' | 'Mac' | 'IOS';

function logDetails(id: Id, item: string) {
  console.log(`ID: ${id} - Item: ${item}`);
}

function logInfo(id: Id, employee: string) {
  console.log(`ID: ${id} - Employee: ${employee}`);
}

function printPlatform(platform: Platform) {
  return platform;
}

logDetails(1, 'Book');
logDetails('2', 'Pencil');

logInfo(3, 'Anderson');
logInfo('4', 'Alpin');

printPlatform('Windows');
