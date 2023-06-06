export enum IOrderDoneState {
    Ready,
    New,
    BeingDone,
    Done,
}

export interface IOrder {
    id: number;
    date: Date;
    state: IOrderDoneState;
    sum: number;
    link?: string;
    client?: string;
    orderDescription?: string;
    mechanic?: string;
    serviceName?: string;
}

function ranDate() {
    const hourRand = 3600 * Math.random();
    const num = 1685934658 + hourRand * 24 * 5;

    return new Date(num * 1000);
}

export const ORDERS: IOrder[] = [
    {
        id: 2,
        date: ranDate(),
        state: IOrderDoneState.New,
        link: 'vaz-1.webp',
        client: 'Клієнт: Ігор Коломойський',
        orderDescription: 'Опис проблеми: Ця тачка просто зламалася на місці, потрібна заміна всього',
        serviceName: 'Назва послуги: Капіталка',
        mechanic: 'Василій Пупкін',
        sum: 10000,
    },
    {
        id: 3,
        date: ranDate(),
        state: IOrderDoneState.BeingDone,
        link: 'trueno.jpeg',
        client: 'Клієнт: Каділак Каділовіч',
        orderDescription: 'Опис проблеми: Ця тачка просто зламалася на місці, потрібна заміна всього',
        serviceName: 'Назва послуги: Капіталка',
        mechanic: 'Василій Пупкін',
        sum: 20000,
    },
    {
        id: 4,
        date: ranDate(),
        state: IOrderDoneState.Done,
        sum: 40,
    },
    {
        id: 5,
        date: ranDate(),
        state: IOrderDoneState.Ready,
        sum: 40,
    },
    {
        id: 6,
        date: ranDate(),
        state: IOrderDoneState.Ready,
        sum: 40,
    },
    {
        id: 7,
        date: ranDate(),
        state: IOrderDoneState.Done,
        sum: 40,
    },
    {
        id: 8,
        date: ranDate(),
        state: IOrderDoneState.New,
        sum: 40,
    },
];

export function addOrder(order: IOrder) {
    ORDERS.push(order);
}

export function removeOrder(order: IOrder) {
    const foundOrderIndex = ORDERS.findIndex((orderToFind) => order === orderToFind);
    if (foundOrderIndex) {
        ORDERS.splice(foundOrderIndex, 1);
    }
}
