export const ENV = {
  showUrl: process.env.SHOW_URL || 'https://premier.ticketek.com.au/shows/show.aspx?sh=ESPLOAD',
  authLoginUrl: process.env.LOGIN_API_URL || 'https://premier.ticketek.com.au/Membership/Login.aspx',
  credentials: {
    email: process.env.username || '',
    password: process.env.password || '',
  },
  showData: {
    title: 'ESPLOAD tickets',
    venue: 'Enmore Theatre, Newtown, NSW',
    performanceDate: 'Mon 30 Apr 2029 12:03PM',
    ticketCategory: 'GA',
    priceType:'Admit',
    ticketQuantity: 2,
    deliveryMethod: 'Mobile Ticket',
    orderStatus:'Order Confirmed',
  },
};