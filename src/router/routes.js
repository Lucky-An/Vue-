import Home from '@/pages/home'

export default [{
    path: '/',
    redirect: {
        name: 'Home'
    }
}, {
    path: '/home',
    name: 'Home',
    component: Home
}]