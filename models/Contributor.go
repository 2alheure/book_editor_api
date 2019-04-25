package models

type Contributor struct {
	ID				int				`gorm:"primary_key";json:"id,omitempty"`
	User			User			`gorm:"foreignkey:UserID"`
	UserID			int				// FOREIGN KEY
	Role			Role			`gorm:"foreignkey:RoleID"`
	RoleID			int				// FOREIGN KEY
}