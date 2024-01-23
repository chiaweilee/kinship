function orderBy(list: any[], key: string, order: any[]): any[] {
  return list.sort((a, b) => {
    return order.indexOf(a[key]) - order.indexOf(b[key]);
  });
}

export { orderBy };
