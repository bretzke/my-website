type Messages = typeof import("@/messages/pt.json");
type EnMessages = typeof import("@/messages/en.json");

declare interface IntlMessages extends Messages, EnMessages {}
