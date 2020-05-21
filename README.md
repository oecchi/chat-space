## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|integer|null: false|
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
- has_many :messages
- has_many :groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|messege_id|integer|null: false, foreign_key: true|

### Association
- has_many :messages
- has_many :users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user