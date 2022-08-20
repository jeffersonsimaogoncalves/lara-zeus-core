import Alpine from 'alpinejs'
import FormsAlpinePlugin from '../../vendor/filament/forms/dist/module.esm'
import NotificationsAlpinePlugin from '../../vendor/filament/notifications/dist/module.esm'
require('./_tager');

Alpine.plugin(NotificationsAlpinePlugin)
Alpine.plugin(FormsAlpinePlugin)

window.Alpine = Alpine

Alpine.start()
