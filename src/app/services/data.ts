import { User } from '../models/User';
import { Journey } from '../models/Journey';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';
import { Location } from '../models/Location';
import '../shared/utils';
import { Group } from '../models/Group';
import { plainToClass } from 'class-transformer';
import { Visibility } from '../models/Visibility';
import { Like } from '../models/Like';

const loremText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut commodi eos, esse iusto minus necessitatibus nemo nisi tenetur voluptate. Esse ex fuga hic ipsa labore laboriosam libero natus quidem tenetur vero! Adipisci architecto, corporis cupiditate delectus dicta doloribus eius enim eos explicabo itaque iure magnam numquam pariatur quam qui quibusdam similique sint, sunt unde, vitae. Dolores ducimus nobis odio reiciendis rerum sed tempora totam unde. Accusantium aliquid cum doloribus eius eos fuga ipsa ipsum laboriosam magni porro, ratione repudiandae sit. Illum iure quibusdam vero. Accusamus adipisci atque delectus, dolore enim eos esse eveniet facere harum impedit in iure laboriosam magnam minima molestias mollitia obcaecati odit officiis pariatur perspiciatis, quidem recusandae reiciendis repellendus saepe sed soluta sunt tempore, temporibus velit vero? Consequatur cumque dolores eligendi error expedita fuga minus molestiae molestias, necessitatibus nihil omnis, quis quos reprehenderit tempora ullam veritatis voluptatibus. Aspernatur blanditiis debitis doloremque dolores eligendi esse excepturi facere id illum iste libero modi neque nostrum placeat quae quaerat ratione rem similique soluta, temporibus ullam, velit veniam! A ad atque consequatur, delectus, dolore eveniet excepturi labore laboriosam magnam necessitatibus odit, perspiciatis placeat quam ratione rem sint ullam veniam voluptatem? Alias consequatur laudantium necessitatibus, nostrum omnis placeat porro? Mollitia, sapiente.'.split(' ');
const icons = ['3d_rotation', 'accessible', 'account_box', 'alarm', 'alarm_add', 'alarm_off', 'alarm_on', 'all_inbox', 'all_out', 'android', 'announcement', 'aspect_ratio', 'assessment', 'assignment', 'autorenew', 'backup', 'book', 'bookmark', 'bookmarks', 'bug_report', 'build', 'cached', 'card_travel', 'check_circle', 'class', 'code', 'commute', 'copyright', 'credit_card', 'dashboard', 'date_range', 'delete', 'description', 'dns', 'done', 'done_all', 'done_outline', 'donut_large', 'donut_small', 'eject', 'euro_symbol', 'event', 'event_seat', 'exit_to_app', 'explore', 'explore_off', 'extension', 'face', 'favorite', 'feedback', 'find_in_page', 'find_replace', 'fingerprint', 'flight_land', 'flip_to_back', 'g_translate', 'gavel', 'get_app', 'gif', 'grade', 'group_work', 'help', 'help_outline', 'history', 'home', 'http', 'https', 'info', 'input', 'label', 'label_off', 'language', 'launch', 'line_style', 'line_weight', 'list', 'lock', 'lock_open', 'loyalty', 'maximize', 'minimize', 'motorcycle', 'note_add', 'offline_bolt', 'offline_pin', 'opacity', 'open_in_new', 'open_with', 'pageview', 'pan_tool', 'payment', 'perm_media', 'pets', 'polymer', 'print', 'receipt', 'redeem', 'reorder', 'restore', 'restore_page', 'room', 'rowing', 'schedule', 'search', 'settings', 'shop', 'shop_two', 'spellcheck', 'star_rate', 'stars', 'store', 'subject', 'swap_horiz', 'swap_vert', 'tab', 'theaters', 'thumb_down', 'thumb_up', 'timeline', 'toc', 'today', 'toll', 'touch_app', 'translate', 'trending_up', 'turned_in', 'update', 'view_agenda', 'view_array', 'view_column', 'view_day', 'view_list', 'view_module', 'view_quilt', 'view_stream', 'view_week', 'status', 'watch_later', 'work', 'work_off', 'work_outline', 'zoom_in', 'zoom_out', 'add_alert', 'error', 'warning', '4k', 'add_to_queue', 'airplay', 'album', 'art_track', 'av_timer', 'equalizer', 'explicit', 'fast_forward', 'fast_rewind', 'fiber_dvr', 'fiber_new', 'fiber_pin', 'forward_10', 'forward_30', 'forward_5', 'games', 'hd', 'hearing', 'high_quality', 'library_add', 'loop', 'mic', 'mic_none', 'mic_off', 'movie', 'music_video', 'new_releases', 'note', 'pause', 'play_arrow', 'playlist_add', 'queue', 'queue_music', 'radio', 'repeat', 'repeat_one', 'replay', 'replay_10', 'replay_30', 'replay_5', 'shuffle', 'skip_next', 'snooze', 'stop', 'subtitles', 'video_call', 'video_label', 'videocam', 'videocam_off', 'volume_down', 'volume_mute', 'volume_off', 'volume_up', 'web', 'web_asset', 'business', 'call', 'call_end', 'call_made', 'call_merge', 'call_missed', 'call_split', 'cell_wifi', 'chat', 'chat_bubble', 'clear_all', 'comment', 'contact_mail', 'contacts', 'dialer_sip', 'dialpad', 'duo', 'email', 'forum', 'list_alt', 'live_help', 'location_off', 'location_on', 'mail_outline', 'message', 'no_sim', 'phone', 'ring_volume', 'rss_feed', 'screen_share', 'swap_calls', 'textsms', 'unsubscribe', 'voicemail', 'vpn_key', 'add', 'add_box', 'add_circle', 'archive', 'backspace', 'ballot', 'block', 'clear', 'create', 'delete_sweep', 'drafts', 'file_copy', 'filter_list', 'flag', 'forward', 'gesture', 'how_to_reg', 'how_to_vote', 'inbox', 'link', 'link_off', 'low_priority', 'mail', 'markunread', 'next_week', 'redo', 'remove', 'reply', 'reply_all', 'report', 'report_off', 'save', 'save_alt', 'select_all', 'send', 'sort', 'text_format', 'unarchive', 'undo', 'waves', 'weekend', 'access_alarm', 'access_time', 'add_alarm', 'battery_20', 'battery_30', 'battery_50', 'battery_60', 'battery_80', 'battery_90', 'battery_full', 'battery_std', 'bluetooth', 'data_usage', 'devices', 'dvr', 'gps_fixed', 'gps_off', 'graphic_eq', 'mobile_off', 'network_cell', 'network_wifi', 'nfc', 'sd_storage', 'storage', 'usb', 'wallpaper', 'widgets', 'wifi_lock', 'add_comment', 'attach_file', 'attach_money', 'bar_chart', 'border_all', 'border_clear', 'border_color', 'border_inner', 'border_left', 'border_outer', 'border_right', 'border_style', 'border_top', 'bubble_chart', 'drag_handle', 'format_bold', 'format_clear', 'format_paint', 'format_quote', 'format_size', 'functions', 'highlight', 'insert_chart', 'insert_link', 'insert_photo', 'linear_scale', 'merge_type', 'mode_comment', 'money_off', 'notes', 'pie_chart', 'publish', 'scatter_plot', 'score', 'short_text', 'show_chart', 'space_bar', 'table_chart', 'text_fields', 'title', 'wrap_text', 'attachment', 'cloud', 'cloud_circle', 'cloud_done', 'cloud_off', 'cloud_queue', 'cloud_upload', 'folder', 'folder_open', 'cast', 'computer', 'desktop_mac', 'device_hub', 'dock', 'gamepad', 'headset', 'headset_mic', 'keyboard', 'keyboard_tab', 'laptop', 'laptop_mac', 'memory', 'mouse', 'phone_iphone', 'phonelink', 'power_input', 'router', 'scanner', 'security', 'sim_card', 'smartphone', 'speaker', 'tablet', 'tablet_mac', 'toys', 'tv', 'watch', 'add_a_photo', 'adjust', 'assistant', 'audiotrack', 'blur_linear', 'blur_off', 'blur_on', 'brightness_1', 'brightness_2', 'brightness_3', 'brightness_4', 'brightness_5', 'brightness_6', 'brightness_7', 'broken_image', 'brush', 'burst_mode', 'camera', 'camera_alt', 'camera_front', 'camera_rear', 'camera_roll', 'collections', 'color_lens', 'colorize', 'compare', 'crop', 'crop_16_9', 'crop_3_2', 'crop_5_4', 'crop_7_5', 'crop_din', 'crop_free', 'crop_rotate', 'crop_square', 'dehaze', 'details', 'edit', 'exposure', 'filter', 'filter_1', 'filter_2', 'filter_3', 'filter_4', 'filter_5', 'filter_6', 'filter_7', 'filter_8', 'filter_9', 'filter_drama', 'filter_hdr', 'filter_none', 'flare', 'flash_auto', 'flash_off', 'flash_on', 'flip', 'gradient', 'grain', 'grid_off', 'grid_on', 'hdr_off', 'hdr_on', 'hdr_strong', 'hdr_weak', 'healing', 'image', 'image_search', 'iso', 'landscape', 'leak_add', 'leak_remove', 'lens', 'looks', 'looks_3', 'looks_4', 'looks_5', 'looks_6', 'looks_one', 'looks_two', 'loupe', 'movie_filter', 'music_note', 'music_off', 'nature', 'palette', 'panorama', 'photo', 'photo_album', 'photo_camera', 'photo_filter', 'portrait', 'rotate_left', 'rotate_right', 'slideshow', 'straighten', 'style', 'switch_video', 'tag_faces', 'texture', 'timelapse', 'timer', 'timer_10', 'timer_3', 'timer_off', 'tonality', 'transform', 'tune', 'view_comfy', 'view_compact', 'vignette', 'wb_auto', 'wb_cloudy', 'wb_sunny', '360', 'add_location'];

const lorem = function(words = 5) {
    return Array.from(Array(words)).map(() => loremText.random()).join(' ');
};

export const locations: Location[] = [
    {
        id: 1,
        name: 'Brasov',
    },
    {
        id: 2,
        name: 'Sibiu',
    },
    {
        id: 3,
        name: 'Cluj',
    }
];

const ionel = new User(1, 'Ionel Lupu');
const ceachi = new User(2, 'Bogdan Ceachi');
export const users: User[] = [
    ionel,
    ceachi,
];

Array.from(Array(Math.randomInt(5, 20))).forEach(() => {
    const user = new User(users.length + 1, lorem(2));
    ionel.friends.push(user);
    ceachi.friends.push(user);
    users.push(user);
});

export let journeys: Journey[] = [];
export let posts: Post[] = [];
export let groups: Group[] = [];
export let comments: Comment[] = [];
export let visibilities: Visibility[] = [
    {
        id: 1,
        name: 'Friends'
    },
    {
        id: 3,
        name: 'Everyone'
    },
    {
        id: 3,
        name: 'Only Me'
    },
];

const journeyNames = [
    'La Piatra Craiului cu familia',
    'Sinaia',
    'Pe munte la Crai',
    'Scarisoara',
    'Muntii Apuseni',
    'Pestera',
    'padure',
    'Munte',
    'Lac',
    'Animale salbatice',
    'Carpati',
    'Poalele muntilor'
];

const images = [
    'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/2635/SITours/dolomite-mountains-and-cortina-small-group-day-trip-from-venice-in-venice-42464.jpg',
    'https://www.rei.com/adventures/assets/adventures/images/trip/core/europe/etm_hero',
    'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/3142/SITours/pyrenees-mountains-small-group-day-trip-from-barcelona-in-barcelona-115256.jpg',
    'https://www.telegraph.co.uk/content/dam/Travel/2018/August/mountains-hallstatt.jpg?imwidth=450',
    'https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/201409-w-best-countries-for-solo-travelers-finland.jpg?itok=v-cFz9bh',
    'https://www.rei.com/adventures/assets/adventures/images/trip/gallery/africa/lem_01',
    'https://images.unsplash.com/photo-1504964148034-86ded740d1e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    'https://www.pixelstalk.net/wp-content/uploads/2016/08/Travel-Images-For-Desktop.jpg',
    'https://gizmodiva.com/wp-content/uploads/2017/10/SCOTT-A-WOODWARD_1SW1943-1170x689.jpg',
    'https://images.wallpaperscraft.com/image/mountains_winter_man_travel_118817_1920x1080.jpg',
];
export const coordinates = [[{'lat': 44.93784631556589, 'lng': 22.339569735031432}, {
    'lat': 44.99323020408533,
    'lng': 22.187134432297057
}, {'lat': 44.91548328954919, 'lng': 22.044312166672057}, {
    'lat': 44.988374107766845,
    'lng': 21.982514070968932
}, {'lat': 45.036916555896575, 'lng': 21.828705477218932}], [{
    'lat': 44.96779183382434,
    'lng': 22.507797884445495
}, {'lat': 45.10753291080301, 'lng': 22.653366732101745}, {'lat': 45.18308350310568, 'lng': 22.801682161789245}, {
    'lat': 45.08232712926722,
    'lng': 23.059860872726745
}, {'lat': 45.024117480049995, 'lng': 23.285080599289245}], [{
    'lat': 45.3628385476186,
    'lng': 23.194443392257995
}, {'lat': 45.405277974928865, 'lng': 23.419663118820495}, {'lat': 45.27399861068491, 'lng': 23.716293978195495}, {
    'lat': 45.16372110176698,
    'lng': 23.666855501632995
}, {'lat': 45.150163503932355, 'lng': 23.403183626632995}, {
    'lat': 45.292278851970885,
    'lng': 23.38714599609375
}], [{'lat': 46.463125642090155, 'lng': 22.49818484733612}, {'lat': 46.50851240677888, 'lng': 22.92115848014862}, {
    'lat': 46.65198736482788,
    'lng': 23.02003543327362
}, {'lat': 46.73111329182594, 'lng': 22.73988406608612}, {'lat': 46.63313077140943, 'lng': 22.42677371452362}], [{
    'lat': 44.42466562558367,
    'lng': 25.99733035514862
}, {'lat': 44.81955183676241, 'lng': 24.93714969108612}, {'lat': 45.15367426285141, 'lng': 24.28895633171112}, {
    'lat': 45.33931435591859,
    'lng': 24.25050418327362
}, {'lat': 45.40491640987162, 'lng': 23.34962527702362}, {'lat': 45.926993753263034, 'lng': 23.56935183952362}, {
    'lat': 46.51607318603184,
    'lng': 23.81105105827362
}, {'lat': 46.71605062398666, 'lng': 23.69020144889862}], [{
    'lat': 45.513161848560536,
    'lng': 24.301315950851745
}, {'lat': 45.647726423157685, 'lng': 24.842392611007995}, {
    'lat': 45.538176798136746,
    'lng': 25.150009798507995
}, {'lat': 45.29332348939288, 'lng': 25.509812044601745}], [{
    'lat': 45.173403125312696,
    'lng': 26.020676302414245
}, {'lat': 45.45924571429629, 'lng': 25.932785677414245}, {'lat': 45.53432906837698, 'lng': 26.201950716476745}, {
    'lat': 45.68227661597289,
    'lng': 25.968491243820495
}, {'lat': 45.68035772022952, 'lng': 25.594956087570495}], [{
    'lat': 45.95715587852596,
    'lng': 26.023422884445495
}, {'lat': 46.06016825895663, 'lng': 26.361252474289245}, {'lat': 45.91103315853961, 'lng': 26.663818359375}, {
    'lat': 45.95715587852596,
    'lng': 27.00493830848245
}, {'lat': 46.12492948814228, 'lng': 27.022088964062505}, {
    'lat': 46.23522902744021,
    'lng': 26.799615819531255
}], [{'lat': 46.364263972550496, 'lng': 25.788873632031255}, {
    'lat': 46.52890944480787,
    'lng': 25.950921971875005
}, {'lat': 46.58556836864164, 'lng': 26.134942967968755}, {'lat': 46.468408047571046, 'lng': 26.382135350781255}, {
    'lat': 46.6402824291785,
    'lng': 26.502984960156255
}, {'lat': 46.92803134745347, 'lng': 26.343683202343755}, {'lat': 46.88299596390676, 'lng': 26.041559178906255}, {
    'lat': 46.79469206520373,
    'lng': 25.728448827343755
}, {'lat': 46.700592419133976, 'lng': 25.571893651562505}, {'lat': 46.95053485160581, 'lng': 25.445550878125005}, {
    'lat': 47.03296678779886,
    'lng': 25.799859960156255
}, {'lat': 47.20304769858487, 'lng': 26.148675878125005}], [{
    'lat': 47.23575731729417,
    'lng': 25.698236425000005
}, {'lat': 47.43120833187729, 'lng': 25.599359471875005}, {'lat': 47.5555467133249, 'lng': 25.794366796093755}, {
    'lat': 47.65554551633133,
    'lng': 25.571893651562505
}, {'lat': 47.44607018389696, 'lng': 25.321954686718755}, {'lat': 47.33264252022088, 'lng': 25.291742284375005}, {
    'lat': 47.22270152669592,
    'lng': 24.978631932812505
}, {'lat': 47.10191431533552, 'lng': 25.07904052734375}], [{'lat': 47.55984733956309, 'lng': 24.71923828125}, {
    'lat': 47.78363463526376,
    'lng': 24.56268310546875
}, {'lat': 47.79965080388595, 'lng': 24.297479589062505}, {'lat': 47.60927353931565, 'lng': 24.127191503125005}, {
    'lat': 47.512896572234354,
    'lng': 23.926691014843755
}, {'lat': 47.705473236524824, 'lng': 23.726190526562505}, {
    'lat': 47.89365796114091,
    'lng': 23.879999120312505
}], [{'lat': 47.27003334849479, 'lng': 24.22744174726563}, {'lat': 47.03094502771314, 'lng': 24.48012729414063}, {
    'lat': 46.70044177559259,
    'lng': 24.58449741132813
}, {'lat': 46.48149722731521, 'lng': 24.48562045820313}, {'lat': 46.34515568436506, 'lng': 24.83718295820313}]];

users.forEach(user => {
    const journeysList = Array.from(Array(Math.randomInt(3, 5))).map(() => {
        const journeyName = journeyNames.random();
        const coord = coordinates.random();
        const journey = plainToClass(Journey, {
            id: journeys.length,
            checkpoints: [],
            user: user,
            name: journeyName
        });
        journeys.push(journey);

        journey.checkpoints = coord.map((coords, index) => {
            return {
                id: index + 1,
                latitude: coords.lat,
                longitude: coords.lng,
                journey: journey
            };
        });

        journey.posts = Array.from(Array(Math.randomInt(1, 2)).keys()).map(() => {
            const post: Post = {
                id: posts.length,
                likes: Array.from(Array(Math.randomInt(10, 300))).map(() => {
                    const like = new Like;
                    like.id = Math.randomInt();
                    like.user = user;
                    return like;
                }),
                user: user,
                createdAt: new Date(),
                updatedAt: new Date(),
                location: locations.random(),
                photos: [],
                comments: [],
                description: lorem(Math.randomInt(10, 25)),
                journey: journey
            };
            posts.push(post);

            post.photos = Array.from(Array(Math.randomInt(1, 3)).keys()).map(() => {
                return {
                    id: Math.randomInt(),
                    path: images.random(),
                    user
                };
            });

            const comment: Comment = {
                id: comments.length,
                post: post,
                likes: Math.randomInt(2, 10),
                message: lorem(Math.randomInt(15, 25)),
                date: new Date(),
                user: users.random()
            };
            comments.push(comment);

            post.comments = [comment];
            return post;
        });

        return journey;
    });
    user.journeys = journeysList;
    user.activeJourney = journeysList.random();

});

Array.from(Array(Math.randomInt(6, 12))).forEach(() => {
    const owner = users.random();
    groups.push({
        id: groups.length,
        about: lorem(Math.randomInt(15, 25)),
        name: lorem(Math.randomInt(2, 3)),
        owner: owner,
        members: Math.randomInt(10, 500),
        picture: icons.random()
    });
});

users.forEach(user => {
    Array.from(Array(Math.randomInt(10, 20))).forEach(() => {
        user.groups.push(groups.random());
    });
});

console.log(' Data ->', users, journeys, posts);

