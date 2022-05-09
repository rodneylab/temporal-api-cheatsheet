async function getResult(title: string) {
  return import(`../content/${title}.ts`);
}

export default getResult;
