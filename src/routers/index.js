import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/Profile';
import Search from '~/page/Search';
import Upload from '~/page/Upload';
import { HeaderOnly } from '~/components/Layout';

export const publicRouters = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/search', component: Search, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },


]

export const privateRouters = [

]