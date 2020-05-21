## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|integer||
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false, unique: true|
|email|integer|null: false, unique: true|
|password|integer|null: false,|

### Association
- has_many :messages, through: :groups_users
- has_many :groups, through: :groups_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|integer|null: false|

### Association
- has_many :messages, through: :groups_users
- has_many :users, through: :groups_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user