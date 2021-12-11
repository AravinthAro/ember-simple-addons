import Component from '@glimmer/component';

export default class DemoNavHeaderComponent extends Component {
    data={
        'logo': {
            'url' : 'https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png',
            'width' : '170px'
        },
        'nav': [
            {
                'title': 'My works',
                'route': 'my-works'
            },
            {
                'title': 'About me',
                'route': 'about-me'
            },
            {
                'title': 'Contact',
                'route': 'contact'
            },
            {
                'title': 'Gallery',
                'route': 'gallery'
            },
            {
                'title': 'Testimony',
                'route': 'testimony'
            },
            {
                'title': 'Careers',
                'route': 'careers'
            },
            {
                'title': 'History',
                'route': 'history'
            },
            {
                'title': 'Pricing',
                'route': 'pricing'
            }
        ],
        'options': {
            'user': {
                'imgUrl': 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png'
            }
        }
    }

    config={
        'bar': {
            'isSticky': true,
        },
        'options': {
            'hideGlobalSearch': true,
        },
        'nav': {
            'alignRight': true
        }
    }
}
